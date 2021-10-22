import React, {useEffect} from 'react';
import {Box, Button, ButtonGroup, Flex, Spacer} from '@chakra-ui/react';
import {Navigation} from './components/layout/Navigation';
import {AppRouter} from './routers/AppRouter';

import Modal from './components/modal/BaseModal';

// Redux
import {useAppDispatch, useAppSelector} from "./store/hooks";
import {useGetBikesCountQuery} from "./features/bikes/bike.slice";
import {setPageCount} from "./features/pagination/pagination.slice";

import {MdFirstPage, MdLastPage, MdSkipNext, MdSkipPrevious} from "react-icons/md";
import {PaginationControls} from "./components/pagination/pagination-controls";


const App = () => {
    return (        
        <>
            <Modal />
            <Flex minH={'100vh'} flexDir={'column'} alignItems={'stretch'}>
                <Navigation/>
                <Box flex='1' flexDir={'row'} overflow={'auto'} padding={5}>
                    <AppRouter/>
                </Box>
                <Box bg='teal.700' color='white' padding={'5'}>
                    <PaginationControls />
                </Box>
            </Flex>
        </>
    )
};
export default App;
