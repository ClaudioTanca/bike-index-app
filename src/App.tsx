import React, {useEffect} from 'react';
import {Box, Button, ButtonGroup, Flex, Spacer} from '@chakra-ui/react';
import {Navigation} from './components/layout/Navigation';
import {AppRouter} from './routers/AppRouter';

import Modal from './components/modal/BaseModal';

// Redux
import {PaginationControls} from "./components/pagination/pagination-controls";


const App = () => {
    return (        
        <>
            <Modal />
            <Flex minH={'100vh'} flexDir={'column'} alignItems={'stretch'}>
                <Navigation/>
                <AppRouter/>
            </Flex>
        </>
    )
};
export default App;
