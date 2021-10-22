// @flow
import * as React from 'react';
import {Bike} from "../../models";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    Skeleton,
    SkeletonText,
    SkeletonCircle
} from "@chakra-ui/react"
import {BikeListHeader} from "./bike-list-header";
import {range} from "../../utils/functions";

type Props = { size: number };

export const BikeListLoader = ({size}: Props) => {
    return (
        <>
            <Table>
                <Thead>
                    <BikeListHeader />
                </Thead>
                <Tbody>
                    {range(size).map(x => (
                        <Tr key={x}>
                            <Td><SkeletonText size="10" noOfLines={3} spacing={1} /></Td>
                            <Td><SkeletonText size="10" noOfLines={3} spacing={1} /></Td>
                            <Td><SkeletonText size="10" noOfLines={3} spacing={1} /></Td>
                        </Tr>
                    ))}
                </Tbody>
                <Tfoot>
                    <BikeListHeader />
                </Tfoot>
            </Table>
        </>
    );
};