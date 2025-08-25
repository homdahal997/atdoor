"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useRef } from 'react'
import { Button } from './button'

interface GoogleMapsProps {
  businessAddress: string
  businessName: string
  businessPhone: string
}

interface LocationData {
  address: string
  distance?: string
  duration?: string
  coordinates?: { lat: number; lng: number }
}

export default function GoogleMaps({ businessAddress, businessName, businessPhone }: GoogleMapsProps) {
  const [userLocation, setUserLocation] = useState<LocationData>({ address: '' })
  const [isLoadingLocation, setIsLoadingLocation] = useState(false)
  const [isCalculatingRoute, setIsCalculatingRoute] = useState(false)
  const [error, setError] = useState<string>('')
  const [mapLoaded, setMapLoaded] = useState(false)
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)

  // Business coordinates for 8501 Mayland Dr, Suite 103A, Richmond VA 23294
  const businessCoords = { lat: 37.5407, lng: -77.4360 }

  useEffect(() => {
    loadGoogleMaps()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const loadGoogleMaps = () => {
    // Check if API key is provided
    if (!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY) {
      setError('Google Maps API key is not configured. Please contact the administrator.')
      return
    }

    // Check if Google Maps is already loaded
    if (typeof window !== 'undefined' && (window as any).google && (window as any).google.maps) {
      initializeMap()
      return
    }

    // Create script element to load Google Maps
    const script = document.createElement('script')
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places,geometry`
    script.async = true
    script.defer = true
    script.onload = initializeMap
    script.onerror = () => {
      setError('Failed to load Google Maps. Please check your internet connection and refresh the page.')
    }
    document.head.appendChild(script)
  }

  const initializeMap = () => {
    if (!mapRef.current) return

    try {
      const google = (window as any).google
      const map = new google.maps.Map(mapRef.current, {
        center: businessCoords,
        zoom: 15,
        mapTypeControl: true,
        streetViewControl: true,
        fullscreenControl: true,
        zoomControl: true,
        styles: [
          {
            featureType: "poi.business",
            stylers: [{ visibility: "on" }]
          },
          {
            featureType: "poi.medical",
            stylers: [{ visibility: "on" }]
          }
        ]
      })

      // Create custom marker for business location
      const businessMarker = new google.maps.Marker({
        position: businessCoords,
        map: map,
        title: businessName,
        icon: {
          url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
            <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="18" fill="#059669" stroke="#ffffff" stroke-width="3"/>
              <circle cx="20" cy="20" r="8" fill="#ffffff"/>
              <text x="20" y="25" text-anchor="middle" fill="#059669" font-size="12" font-weight="bold">🏥</text>
            </svg>
          `),
          scaledSize: new google.maps.Size(40, 40),
          anchor: new google.maps.Point(20, 20)
        }
      })

      // Create info window
      const infoWindow = new google.maps.InfoWindow({
        content: `
          <div style="padding: 10px; max-width: 250px;">
            <h3 style="margin: 0 0 8px 0; color: #059669; font-weight: bold;">${businessName}</h3>
            <p style="margin: 0 0 8px 0; color: #374151; font-size: 14px;">${businessAddress}</p>
            <p style="margin: 0 0 8px 0; color: #374151; font-size: 14px;">📞 ${businessPhone}</p>
            <div style="margin-top: 10px;">
              <a href="https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(businessAddress)}" 
                 target="_blank" 
                 style="background: #059669; color: white; padding: 6px 12px; text-decoration: none; border-radius: 6px; font-size: 12px;">
                Get Directions
              </a>
            </div>
          </div>
        `
      })

      // Add click listener to marker
      businessMarker.addListener('click', () => {
        infoWindow.open(map, businessMarker)
      })

      mapInstanceRef.current = map
      setMapLoaded(true)
    } catch (error) {
      console.error('Error initializing map:', error)
      setError('Failed to initialize map. Please refresh the page and try again.')
    }
  }

  const detectUserLocation = () => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by this browser.')
      return
    }

    setIsLoadingLocation(true)
    setError('')

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords
          const google = (window as any).google
          const geocoder = new google.maps.Geocoder()
          
          const result = await geocoder.geocode({
            location: { lat: latitude, lng: longitude }
          })

          if (result.results && result.results[0]) {
            const address = result.results[0].formatted_address
            setUserLocation({
              address,
              coordinates: { lat: latitude, lng: longitude }
            })
            calculateRoute({ lat: latitude, lng: longitude })
          }
        } catch (geocodingError) {
          console.error('Geocoding error:', geocodingError)
          setError('Failed to get your address. Please enter it manually.')
        } finally {
          setIsLoadingLocation(false)
        }
      },
      (geolocationError) => {
        setIsLoadingLocation(false)
        switch (geolocationError.code) {
          case geolocationError.PERMISSION_DENIED:
            setError('Location access denied. Please enter your address manually.')
            break
          case geolocationError.POSITION_UNAVAILABLE:
            setError('Location information unavailable. Please enter your address manually.')
            break
          case geolocationError.TIMEOUT:
            setError('Location request timed out. Please try again.')
            break
          default:
            setError('An unknown error occurred. Please enter your address manually.')
            break
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000
      }
    )
  }

  const handleAddressSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!userLocation.address.trim()) return

    setIsCalculatingRoute(true)
    setError('')

    try {
      const google = (window as any).google
      const geocoder = new google.maps.Geocoder()
      const result = await geocoder.geocode({ address: userLocation.address })

      if (result.results && result.results[0]) {
        const location = result.results[0].geometry.location
        const coordinates = { lat: location.lat(), lng: location.lng() }
        
        setUserLocation(prev => ({ ...prev, coordinates }))
        calculateRoute(coordinates)
      } else {
        setError('Address not found. Please check your address and try again.')
      }
    } catch (geocodingError) {
      console.error('Geocoding error:', geocodingError)
      setError('Failed to find address. Please check your input and try again.')
    } finally {
      setIsCalculatingRoute(false)
    }
  }

  const calculateRoute = async (userCoords: { lat: number; lng: number }) => {
    try {
      const google = (window as any).google
      const service = new google.maps.DistanceMatrixService()
      
      const result = await service.getDistanceMatrix({
        origins: [userCoords],
        destinations: [businessCoords],
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.IMPERIAL,
        avoidHighways: false,
        avoidTolls: false
      })

      if (result.rows && result.rows[0] && result.rows[0].elements[0]) {
        const element = result.rows[0].elements[0]
        if (element.status === 'OK') {
          setUserLocation(prev => ({
            ...prev,
            distance: element.distance?.text,
            duration: element.duration?.text,
            coordinates: userCoords
          }))
        }
      }
    } catch (error) {
      console.error('Error calculating route:', error)
    }
  }

  const openDirections = () => {
    const origin = userLocation.coordinates 
      ? `${userLocation.coordinates.lat},${userLocation.coordinates.lng}`
      : encodeURIComponent(userLocation.address)
    const destination = encodeURIComponent(businessAddress)
    
    window.open(
      `https://www.google.com/maps/dir/${origin}/${destination}`,
      '_blank'
    )
  }

  // Fallback component when Google Maps fails to load
  if (error && !mapLoaded) {
    return (
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="p-8 text-center">
          <div className="text-6xl mb-4">🗺️</div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Interactive Map</h3>
          <p className="text-gray-600 mb-6">{error}</p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-2">{businessName}</h4>
            <p className="text-gray-600 mb-4">{businessAddress}</p>
            <p className="text-gray-600 mb-6">📞 {businessPhone}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(businessAddress)}`, '_blank')}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
              >
                🗺️ Open in Google Maps
              </Button>
              <Button
                onClick={() => window.open(`https://maps.apple.com/?q=${encodeURIComponent(businessAddress)}`, '_blank')}
                className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
              >
                🍎 Open in Apple Maps
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* User Location Input Section */}
      <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-b">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Get Directions to Our Office</h3>
        
        <form onSubmit={handleAddressSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <label htmlFor="user-address" className="sr-only">Your starting address</label>
              <input
                id="user-address"
                type="text"
                value={userLocation.address}
                onChange={(e) => setUserLocation(prev => ({ ...prev, address: e.target.value }))}
                placeholder="Enter your starting address..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                disabled={isLoadingLocation || isCalculatingRoute}
              />
            </div>
            <div className="flex gap-2">
              <Button
                type="button"
                onClick={detectUserLocation}
                disabled={isLoadingLocation || isCalculatingRoute}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-all duration-300 whitespace-nowrap"
              >
                {isLoadingLocation ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Detecting...
                  </span>
                ) : (
                  '📍 My Location'
                )}
              </Button>
              <Button
                type="submit"
                disabled={!userLocation.address.trim() || isCalculatingRoute}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-medium transition-all duration-300"
              >
                {isCalculatingRoute ? 'Calculating...' : 'Calculate Route'}
              </Button>
            </div>
          </div>
        </form>

        {/* Route Information */}
        {userLocation.distance && userLocation.duration && (
          <div className="mt-4 p-4 bg-white rounded-lg border border-green-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="flex items-center space-x-4 text-sm">
                <span className="flex items-center text-gray-600">
                  <svg className="w-4 h-4 mr-1 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Distance: <strong className="text-green-600">{userLocation.distance}</strong>
                </span>
                <span className="flex items-center text-gray-600">
                  <svg className="w-4 h-4 mr-1 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Time: <strong className="text-green-600">{userLocation.duration}</strong>
                </span>
              </div>
              <Button
                onClick={openDirections}
                className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 text-sm"
              >
                🗺️ Get Directions
              </Button>
            </div>
          </div>
        )}

        {/* Error Display */}
        {error && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-600 text-sm">{error}</p>
          </div>
        )}
      </div>

      {/* Map Container */}
      <div className="relative">
        {!mapLoaded && (
          <div className="absolute inset-0 bg-gray-100 flex items-center justify-center z-10">
            <div className="text-center">
              <svg className="animate-spin h-8 w-8 text-green-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <p className="text-gray-600 font-medium">Loading Interactive Map...</p>
            </div>
          </div>
        )}
        <div 
          ref={mapRef} 
          className="w-full h-96 md:h-[500px]"
          role="application"
          aria-label="Interactive map showing business location"
        />
      </div>
    </div>
  )
}
