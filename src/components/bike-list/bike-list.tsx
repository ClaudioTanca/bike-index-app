// @flow
import * as React from 'react';
import {Bike} from "../../models";
import {Table, Tbody, Td, Tfoot, Thead, Tr} from "@chakra-ui/react";
import {BikeListHeader} from "./bike-list-header";
import {BikeListRow} from "./bike-list-row";
type Props = { bikes: Bike[] | undefined };

export const BikeList = ({bikes}: Props) => {
    return (
        <>
            <Table>
                <Thead>
                    <BikeListHeader />
                </Thead>
                <Tbody color={"inherit"}>
                    {bikes && bikes.map(x => <BikeListRow key={x.id} bike={x} />) }
                </Tbody>
                <Tfoot>
                    <BikeListHeader />
                </Tfoot>
            </Table>
        </>
    );
};