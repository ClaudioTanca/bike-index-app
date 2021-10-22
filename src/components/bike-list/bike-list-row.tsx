// @flow
import * as React from 'react';
import { useAppDispatch } from '../../store/hooks';
import { openModal } from '../../features/modal/modal.slice';
import {Bike} from "../../models";
import {Td, Th, Tr, Button} from "@chakra-ui/react";
import { MdPedalBike } from 'react-icons/md';
import {formatDate} from "../../utils/functions";

type Props = {
    bike: Bike
};
export const BikeListRow = ({ bike }: Props) => {
    const { title, date_stolen, year } = bike;
    const dispatch = useAppDispatch();
    const openDetails = () => dispatch(openModal({
        title,
        bike,
    }));

    return (
        <Tr>
            <Td>{title}</Td>
            <Td>{formatDate(date_stolen)}</Td>
            <Td>{year}</Td>
            <Td>
                <Button colorScheme="teal" p="1" rounded="full" onClick={openDetails}>
                    <MdPedalBike/>
                </Button>
            </Td>
        </Tr>
    );
};