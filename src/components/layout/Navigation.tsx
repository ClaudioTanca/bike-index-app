// @flow
import * as React from 'react';
import {Heading, Flex} from "@chakra-ui/react";

type Props = {};

export const Navigation = (props: Props) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={3}
      bg="teal.700"
      color="white"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          Berlin Stolen Bikes
        </Heading>
      </Flex>
    </Flex>
  );
};