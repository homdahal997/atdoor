// Google Maps API type declarations
/* eslint-disable @typescript-eslint/no-unused-vars */
declare global {
  interface Window {
    google: typeof google
  }
}

declare namespace google {
  namespace maps {
    class Map {
      constructor(mapDiv: Element | null, opts?: MapOptions)
    }

    class Marker {
      constructor(opts?: MarkerOptions)
      addListener(eventName: string, handler: () => void): void
    }

    class InfoWindow {
      constructor(opts?: InfoWindowOptions)
      open(map?: Map, anchor?: Marker): void
    }

    class Geocoder {
      geocode(request: GeocoderRequest): Promise<GeocoderResult>
    }

    class DistanceMatrixService {
      getDistanceMatrix(request: DistanceMatrixRequest): Promise<DistanceMatrixResponse>
    }

    interface MapOptions {
      center?: LatLng | LatLngLiteral
      zoom?: number
      mapTypeControl?: boolean
      streetViewControl?: boolean
      fullscreenControl?: boolean
      zoomControl?: boolean
      styles?: MapTypeStyle[]
    }

    interface MarkerOptions {
      position?: LatLng | LatLngLiteral
      map?: Map
      title?: string
      icon?: string | Icon | symbol
    }

    interface InfoWindowOptions {
      content?: string | Element
    }

    interface LatLngLiteral {
      lat: number
      lng: number
    }

    interface LatLng {
      lat(): number
      lng(): number
    }

    interface Icon {
      url: string
      scaledSize?: Size
      anchor?: Point
    }

    class Size {
      constructor(width: number, height: number)
    }

    class Point {
      constructor(x: number, y: number)
    }

    interface GeocoderRequest {
      address?: string
      location?: LatLng | LatLngLiteral
    }

    interface GeocoderResult {
      results: GeocoderResult[]
    }

    interface GeocoderResult {
      formatted_address: string
      geometry: {
        location: LatLng
      }
    }

    interface DistanceMatrixRequest {
      origins: (LatLng | LatLngLiteral | string)[]
      destinations: (LatLng | LatLngLiteral | string)[]
      travelMode: TravelMode
      unitSystem: UnitSystem
      avoidHighways?: boolean
      avoidTolls?: boolean
    }

    interface DistanceMatrixResponse {
      rows: DistanceMatrixResponseRow[]
    }

    interface DistanceMatrixResponseRow {
      elements: DistanceMatrixResponseElement[]
    }

    interface DistanceMatrixResponseElement {
      status: string
      distance?: {
        text: string
        value: number
      }
      duration?: {
        text: string
        value: number
      }
    }

    interface MapTypeStyle {
      featureType?: string
      stylers: Record<string, unknown>[]
    }

    enum TravelMode {
      DRIVING = 'DRIVING',
      WALKING = 'WALKING',
      BICYCLING = 'BICYCLING',
      TRANSIT = 'TRANSIT'
    }

    enum UnitSystem {
      METRIC = 0,
      IMPERIAL = 1
    }
  }
}

export {}
