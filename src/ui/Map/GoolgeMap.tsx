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
import SearchBar from './SearchBar'
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
  const map = React.useRef<google.maps.Map | null>(null)
  const heightValue = useBreakpointValue({ sm: '100vh', lg: '60vh' })

  // //states
  const { location, position, zoom, setLocation, setPosition } = useMapStore()
  const [results, setResults] = React.useState<google.maps.places.PlaceResult[]>([])

  const MarkerFactory = chakra(Marker)

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

  const onSearch = (text: string) => {
    if (!text) {
      setResults([])
      return
    }

    if (map.current) {
      const places = new google.maps.places.PlacesService(map.current)

      const request: google.maps.places.FindPlaceFromQueryRequest = {
        query: text,
        fields: ['name', 'geometry'],
        locationBias: {
          radius: 455,
          center: {
            lat: position.lat as number,
            lng: position.lng as number,
          },
        },
      }
      try {
        places.textSearch(request, (result, status) => {
          if (result) {
            setResults(result)
          } else {
            setResults([])
          }
        })
      } catch (error) {
        setResults([])
      }
    }
  }

  const handleSelect = (result: google.maps.places.PlaceResult) => {
    const lat = result.geometry?.location?.lat() as number
    const lng = result.geometry?.location?.lng() as number
    setPosition({
      lat,
      lng,
    })
    setLocation({
      lat,
      lng,
    })
  }

  return (
    <LoadScript libraries={['places']} googleMapsApiKey="AIzaSyCZiC3W1cqOR1LUFElQNSHBK4NL7e7MMSs">
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
        onLoad={(gmap) => {
          map.current = gmap
        }}
      >
        <Center mt={8}>
          <SearchBar results={results} onChange={onSearch} onSelect={handleSelect} on />
          {location && <Marker icon={'/assets/images/geo.svg'} position={location} />}
        </Center>
      </GMap>
    </LoadScript>
  )
})
