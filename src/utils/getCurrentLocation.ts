export const getCurrentLocation = () => {
  return new Promise<GeolocationCoordinates>((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (geolocation) => {
        resolve(geolocation.coords)
      },
      () => {
        reject('There was an error while getting location')
      }
    )
  })
}
