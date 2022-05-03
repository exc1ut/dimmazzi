import { Skeleton } from '@chakra-ui/react';
import dynamic from 'next/dynamic'
import { T } from 'ramda'
import React, { ComponentType, ReactComponentElement, Suspense } from 'react';

const LazyLoaded = dynamic(() => import('../ui/cards/OrderDetailsListItem/OrderDetailsListItem') as any);

interface DynamicComponentProps {
  Component: ComponentType<any>,
  w: number,
  h: number,
}

export const DynamicComponent: React.FC<DynamicComponentProps> = ({ Component, w, h }) => {
  return (
    <Suspense fallback={<Skeleton w={`${(w * 4)}px`} h={`${(w * 4)}px`} />}>
      {Component}
    </Suspense>
  )
}