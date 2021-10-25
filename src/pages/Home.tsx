import * as React from 'react';
import {useGetBikesCountQuery, useGetBikesQuery} from "../features/bikes/bike.slice";
import {BikeListLoader} from "../components/bike-list/bike-list-loading";
import {BikeList} from "../components/bike-list/bike-list";
import {useAppDispatch, useAppSelector} from "../store/hooks";
import {useEffect, useMemo} from "react";
import {SearchField} from "../components/search/search-field";
import {setPageCount} from "../features/application/application.slice";
import { Button } from '@chakra-ui/button';
import { openModal } from '../features/modal/modal.slice';
import { PaginationControls } from '../components/pagination/pagination-controls';
import { Box } from '@chakra-ui/layout';

export const HomePage = () => {
  const dispatch = useAppDispatch();
  const { currentPage, pageSize, query } = useAppSelector(store => store.application);
  const { data = [], isFetching } = useGetBikesQuery({ query: query, page: currentPage, per_page: pageSize });
  const {data: count = {proximity: 0}} = useGetBikesCountQuery({query: query});

  useEffect(() => {
    console.log("COUNT", count);
    dispatch(setPageCount(Math.ceil(count.proximity / pageSize)));
  }, [count, pageSize]);

  return (
    <>
      <Box flex='1' flexDir={'row'} overflow={'auto'} padding={5}>
        <SearchField />
        {isFetching && <BikeListLoader size={5} />}
        {!isFetching && <BikeList bikes={data} />}
      </Box>
      <Box bg='teal.700' color='white' padding={'5'}>
          <PaginationControls />
      </Box>
    </>
  );
};
