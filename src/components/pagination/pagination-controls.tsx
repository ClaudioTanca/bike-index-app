import * as React from 'react';
import {Button, ButtonGroup, Center, Flex, Heading, Spacer, Stack} from "@chakra-ui/react";
import {MdFirstPage, MdLastPage, MdSkipNext, MdSkipPrevious} from "react-icons/md";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {goFirst, goPrev, goNext, goLast} from "../../features/pagination/pagination.slice";
import {useGetBikesCountQuery} from "../../features/bikes/bike.slice";

type Props = { };

export const PaginationControls = (props: Props) => {
    const dispatch = useAppDispatch();
    const { currentPage, pageCount } = useAppSelector( x => x.pagination);
    const isFirst = () => currentPage == 1;
    const isLast = () => currentPage == pageCount;
    return (

        <Flex>
            <Spacer/>
            <ButtonGroup>
                <Button isDisabled={isFirst()} onClick={() => dispatch(goFirst())} leftIcon={<MdFirstPage/>}>First</Button>
                <Button isDisabled={isFirst()} onClick={() => dispatch(goPrev())} leftIcon={<MdSkipPrevious/>}>Prev</Button>
                <Button isDisabled={isLast()} onClick={() => dispatch(goNext())} rightIcon={<MdSkipNext/>}>Next</Button>
                <Button isDisabled={isLast()} onClick={() => dispatch(goLast())} rightIcon={<MdLastPage/>}>Last</Button>
            </ButtonGroup>
            <Spacer/>
            <Center padding={2}>
                <Heading size={"sm"}>Page {currentPage} of {pageCount}</Heading>
            </Center>
        </Flex>

    );
};