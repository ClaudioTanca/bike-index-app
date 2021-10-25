// @flow
import * as React from 'react';
import { useHistory, useParams } from 'react-router';
import { Box, Divider, Flex, Heading, Text } from '@chakra-ui/layout';
import { MdOutlineArrowBack } from "react-icons/md";
import { useGetBikeDetailsQuery } from '../features/bikes/bike.slice'; 
import { Bike } from '../models';
import { Image } from '@chakra-ui/image';
import { Loader } from '../components/utility/Loader';
import { Button } from '@chakra-ui/button';
import { isBoolean } from 'lodash';
import { formatDate } from '../utils/functions';
import GoogleMap from '../components/utility/GoogleMap';

interface params {
  id: string
}

const isDateNum = (str: string): boolean => /^date_/.test(str) || /^registration_/.test(str) || /^created_at/.test(str);
const isImageUrl = (str: string): boolean => /[^/]+(jpg|jpeg|png)$/.test(str);
const nestedObjects = ['components', 'public_images', 'frame_colors', 'stolen_record'];
const isNestObj = (key: string) => nestedObjects.includes(key);

export const DetailsPage = () => {
  const Router = useHistory();
  const { id }: params = useParams();
  const { data, isFetching, isError, isSuccess } = useGetBikeDetailsQuery({ id: parseInt(id) });
  if (isSuccess && data !== undefined) {
    return (
      <>
        <Box flex='1' flexDir={'row'} overflow={'auto'} padding={5}>
          <Flex flexDirection="column" justifyContent="center">
            <Flex flexDir={['column', 'row']} justifyContent={['center', 'space-between']} alignItems="center">
              <Button onClick={() => Router.push('/')} colorScheme="teal" display={['none', 'block']} mr="4">
                <MdOutlineArrowBack />
              </Button> 
              <Heading as="h2" size="lg">{data.title}</Heading> <span>{' '}</span>
            </Flex>
            <Image 
              src={data.large_img} 
              // fallBackSrc={bike.thumb}
              fallback={<Loader />}
              w="container.xs"
              objectFit="cover" 
              rounded="md"
              mt="2"
              mb="4"
              maxH="md"
            />
            <Flex wrap="wrap">
              {
                Object.entries(data).map(([k, v]) => (
                  (v && !isNestObj(k) && !isImageUrl(v)) && 
                  <Box display="inline-block" key={k} py="1" px="2" rounded="md">
                    <Text
                      display="inline-block" 
                      fontWeight="bold" 
                      textTransform="capitalize"
                      color="teal.700"
                    >
                        {k.replaceAll('_', ' ')}:
                    </Text>
                    <span>{' '}</span> 
                    <Text 
                      wordBreak="break-all" 
                      display="inline-block"
                    >
                      {
                        isBoolean(v) 
                          ? v.toString() 
                          : isDateNum(k)
                            ? formatDate(v)
                            : v
                      }
                    </Text>
                  </Box>
                ))
              }
              <Box display="inline-block" py="1" px="2" rounded="md">
                <Text
                  display="inline-block" 
                  fontWeight="bold" 
                  textTransform="capitalize"
                  color="teal.700"
                >
                  Frame Colors: 
                </Text>
                <span>{' '}</span> 
                <Text 
                  wordBreak="break-all" 
                  display="inline-block"
                >
                  { data.frame_colors.join(', ') }
                </Text>
              </Box>
              <Divider orientation="horizontal"/>
              <Heading mt="4" mb="2" color="teal.500" as="h3" size="md">Stolen Record</Heading>
              <Box w="full" mt="2" mb="4">
                <GoogleMap 
                  latitude={data.stolen_record.latitude} 
                  longitude={data.stolen_record.longitude}
                />
              </Box>
              <Box>
                {
                  Object.entries(data.stolen_record).map(([k, v]) => (
                    (v && !isNestObj(k) && !isImageUrl(v)) && 
                    <Box display="inline-block" key={k} py="1" px="2" rounded="md">
                      <Text
                        display="inline-block" 
                        fontWeight="bold" 
                        textTransform="capitalize"
                        color="teal.700"
                      >
                          {k.replaceAll('_', ' ')}:
                      </Text>
                      <span>{' '}</span> 
                      <Text 
                        wordBreak="break-all" 
                        display="inline-block"
                      >
                        {
                          isBoolean(v) 
                            ? v.toString() 
                            : isDateNum(k)
                              ? formatDate(v)
                              : v
                        }
                      </Text>
                    </Box>
                  ))
                }
              </Box>
              {data.components.length > 0 &&
                <>
                  <Divider orientation="horizontal" />
                  <Heading w="full" mt="4" mb="2" color="teal.500" as="h3" size="md">Components</Heading>
                  <Box>
                    {data.components.map(component => (
                      <Box key={component.id} p="3" m="2" rounded="md" borderColor="teal.400" borderWidth="1px">
                        {Object.entries(component).map(([k, v]) => (
                          (v && !isNestObj(k) && !isImageUrl(v)) && 
                            <Box key={k} display="inline-block" py="1" px="2" rounded="md">
                              <Text
                                display="inline-block" 
                                fontWeight="bold" 
                                textTransform="capitalize"
                                color="teal.700"
                              >
                                  {k.replaceAll('_', ' ')}:
                              </Text>
                              <span>{' '}</span> 
                              <Text 
                                wordBreak="break-all" 
                                display="inline-block"
                              >
                                {
                                  isBoolean(v) 
                                    ? v.toString() 
                                    : isDateNum(k)
                                      ? formatDate(v)
                                      : v
                                }
                              </Text>
                            </Box>
                        ))}
                      </Box>
                    ))}
                  </Box>
                </>
              }
              
            </Flex>
          </Flex>
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center" bg='teal.700' color='white' padding={'5'}>
          <Text fontSize="xs">© 2021 Lorem</Text>
      </Box>
      </>
    );
  } else {
    return (
      <Loader />
    )
  }
};