// @flow
import * as React from 'react';
import {Bike} from "../../models";
import {Td, Th, Tr} from "@chakra-ui/react";
import {formatDate} from "../../utils/functions";

type Props = {
    bike: Bike
};
export const BikeListRow = ({bike}: Props) => {
    return (
        <Tr>
            <Td>{bike.title}</Td>
            <Td>{formatDate(bike.date_stolen)}</Td>
            <Td>{bike.year}</Td>
        </Tr>
    );
};