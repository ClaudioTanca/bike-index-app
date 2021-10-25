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
      <SearchField />
      {isFetching && <BikeListLoader size={5} />}
      {!isFetching && <BikeList bikes={data} />}
    </>
  );
};
