// @flow
import * as React from 'react';
import {Th, Tr} from "@chakra-ui/react";

type Props = {

};
export const BikeListHeader = (props: Props) => {
    return (
        <Tr>
            <Th>Title</Th>
            <Th>Date Stolen</Th>
            <Th>Year</Th>
        </Tr>
    );
};