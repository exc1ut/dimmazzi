import { Box, Center, chakra, useBreakpointValue } from '@chakra-ui/react'
import {
  useJsApiLoader,
  GoogleMap as GMap,
  LoadScript,
  StandaloneSearchBox,
  Autocomplete,
  Marker,
} from '@react-google-maps/api'
import React, { useCallback, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { SearchInput } from '../inputs/SearchInput'
import { useMapStore } from './useMapStore'

const containerStyle = {
  width: '100%',
  height: '600px',
}

const center = {
  lat: -3.745,
  lng: -38.523,
}

export const GoogleMap = React.memo(({}) => {
  const { t } = useTranslation()
  const ref = useRef<google.maps.places.SearchBox | null>(null)
  const heightValue = useBreakpointValue({ sm: '100vh', lg: '60vh' })
  const MarkerFactory = chakra(Marker)

  // //states
  const { location, position, zoom, setLocation, setPosition } = useMapStore()

  const onLoad = (box: google.maps.places.SearchBox) => (ref.current = box)

  const onPlacesChanged = () => console.log((ref as any)?.getPlaces())

  const handleClick = (e: google.maps.MapMouseEvent) => {
    const lat = e.latLng?.lat()
    const lng = e.latLng?.lng()

    if (lat && lng) {
      setLocation({
        lat,
        lng,
      })
    }
  }

  return (
    <LoadScript libraries={['places']} googleMapsApiKey="AIzaSyBOk-NKIiF0ojN9nr2HJAmR4yo10iTQvjI">
      <GMap
        options={{
          fullscreenControl: false,
          disableDefaultUI: true,
          keyboardShortcuts: false,
        }}
        mapContainerStyle={containerStyle}
        zoom={zoom}
        center={position}
        onClick={handleClick}
      >
        <StandaloneSearchBox onLoad={onLoad} onPlacesChanged={onPlacesChanged}>
          <Center mt={8}>
            <SearchInput
              borderRadius={'lg'}
              placeholder={t`Search places...`}
              backgroundColor="white"
              w={'60%'}
            />
            {location && <Marker icon={'/assets/images/geo.svg'} position={location} />}
          </Center>
        </StandaloneSearchBox>
      </GMap>
    </LoadScript>
  )
})
