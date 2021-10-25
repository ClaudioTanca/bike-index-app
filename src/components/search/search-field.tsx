import * as React from 'react';
import {useMemo} from "react";
import {Input} from "@chakra-ui/react";
import {useAppDispatch} from "../../store/hooks";
import {debounce} from "lodash";
import {setQuery} from "../../features/application/application.slice";

export const SearchField = () => {
    const dispatch = useAppDispatch();
    const onChange = (evt: InputEvent) => {
        // @ts-ignore
        dispatch(setQuery(evt.target.value));
    };
    const delayedOnKeyPress = useMemo(() => debounce(onChange, 1000), [])
    // @ts-ignore
    return <Input mb="10" placeholder="Search" size={"lg"} type="text" onChange={delayedOnKeyPress}/>;
};