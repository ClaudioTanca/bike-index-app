import * as React from 'react';
import {useGetBikesCountQuery, useGetBikesQuery} from "../features/bikes/bike.slice";
import {BikeListLoader} from "../components/bike-list/bike-list-loading";
import {BikeList} from "../components/bike-list/bike-list";
import {useAppDispatch, useAppSelector} from "../store/hooks";
import {useEffect, useMemo} from "react";
import {SearchField} from "../components/search/search-field";
import {setPageCount} from "../features/pagination/pagination.slice";

export const HomePage = () => {
  const dispatch = useAppDispatch();
  const { query } = useAppSelector(x => x.search);
  const { currentPage, pageSize } = useAppSelector(x => x.pagination);
  const { data = [], isFetching } = useGetBikesQuery({ query: query, page: currentPage, per_page: pageSize })
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
