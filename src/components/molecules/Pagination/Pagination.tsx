import Dot from '@components/atoms/Dot/dots';
import React from 'react';
import type { SharedValue } from 'react-native-reanimated';
import type { CarouselItem } from 'src/data/users';
import { PaginationContainer } from './styles';

type PaginationProps = {
  data: CarouselItem[];
  x: SharedValue<number>;
  screenWidth: number;
};

const Pagination = ({ data, x, screenWidth }: PaginationProps) => {
  return (
    <PaginationContainer>
      {data.map((_, index) => (
        <Dot key={index} x={x} index={index} screenWidth={screenWidth} />
      ))}
    </PaginationContainer>
  );
};

export default Pagination;
