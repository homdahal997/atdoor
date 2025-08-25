"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useRef } from 'react'
import { Button } from './button'

interface FreeMapProps {
  businessAddress: string
  businessName: string
  businessPhone: string
}

export default function FreeMap({ businessAddress, businessName, businessPhone }: FreeMapProps) {
  const [userAddress, setUserAddress] = useState('')
  const [isLoadingLocation, setIsLoadingLocation] = useState(false)
  const [mapLoaded, setMapLoaded] = useState(false)
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)

  // Business coordinates for 8501 Mayland Dr, Suite 103A, Richmond VA 23294
  const businessCoords = { lat: 37.5407, lng: -77.4360 }

  useEffect(() => {
    loadLeafletMap()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const loadLeafletMap = async () => {
    try {
      // Dynamically import Leaflet to avoid SSR issues
      const L = (await import('leaflet')).default

      // Load Leaflet CSS
      if (!document.querySelector('link[href*="leaflet.css"]')) {
        const link = document.createElement('link')
        link.rel = 'stylesheet'
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
        document.head.appendChild(link)
      }

      if (!mapRef.current) return

      // Initialize map
      const map = L.map(mapRef.current).setView([businessCoords.lat, businessCoords.lng], 15)

      // Add OpenStreetMap tiles (completely free)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map)

      // Create custom business marker
      const businessIcon = L.divIcon({
        html: `
          <div style="
            background: linear-gradient(135deg, #059669, #10b981);
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 3px solid white;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            font-size: 18px;
          ">
            🏥
          </div>
        `,
        className: 'custom-business-marker',
        iconSize: [40, 40],
        iconAnchor: [20, 20]
      })

      // Add business marker
      const businessMarker = L.marker([businessCoords.lat, businessCoords.lng], { 
        icon: businessIcon 
      }).addTo(map)

      // Add popup to marker
      businessMarker.bindPopup(`
        <div style="padding: 10px; min-width: 200px;">
          <h3 style="margin: 0 0 8px 0; color: #059669; font-weight: bold;">${businessName}</h3>
          <p style="margin: 0 0 8px 0; color: #374151; font-size: 14px;">${businessAddress}</p>
          <p style="margin: 0 0 12px 0; color: #374151; font-size: 14px;">📞 ${businessPhone}</p>
          <button onclick="window.open('https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(businessAddress)}', '_blank')" 
                  style="background: #059669; color: white; padding: 8px 16px; border: none; border-radius: 6px; cursor: pointer; font-size: 12px;">
            Get Directions
          </button>
        </div>
      `).openPopup()

      mapInstanceRef.current = map
      setMapLoaded(true)
    } catch (error) {
      console.error('Error loading map:', error)
      setMapLoaded(false)
    }
  }

  const detectLocation = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by this browser.')
      return
    }

    setIsLoadingLocation(true)

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords
        setIsLoadingLocation(false)
        // Open directions using coordinates
        window.open(
          `https://www.google.com/maps/dir/${latitude},${longitude}/${encodeURIComponent(businessAddress)}`,
          '_blank'
        )
      },
      (error) => {
        setIsLoadingLocation(false)
        let message = 'Unable to detect your location. '
        switch (error.code) {
          case error.PERMISSION_DENIED:
            message += 'Please allow location access or enter your address manually.'
            break
          case error.POSITION_UNAVAILABLE:
            message += 'Location information is unavailable.'
            break
          case error.TIMEOUT:
            message += 'Location request timed out.'
            break
          default:
            message += 'An unknown error occurred.'
            break
        }
        alert(message)
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000
      }
    )
  }

  const openDirections = () => {
    const destination = encodeURIComponent(businessAddress)
    
    if (userAddress.trim()) {
      // Open Google Maps with directions from user's address
      window.open(
        `https://www.google.com/maps/dir/${encodeURIComponent(userAddress)}/${destination}`,
        '_blank'
      )
    } else {
      // Open Google Maps centered on business location
      window.open(
        `https://www.google.com/maps/search/?api=1&query=${destination}`,
        '_blank'
      )
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Directions Input Section */}
      <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-b">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Get Directions to Our Office</h3>
        
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <label htmlFor="user-address" className="sr-only">Your starting address</label>
              <input
                id="user-address"
                type="text"
                value={userAddress}
                onChange={(e) => setUserAddress(e.target.value)}
                placeholder="Enter your starting address (optional)..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
              />
            </div>
            <div className="flex gap-2">
              <Button
                type="button"
                onClick={detectLocation}
                disabled={isLoadingLocation}
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
                  '📍 Use My Location'
                )}
              </Button>
              <Button
                onClick={openDirections}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-medium transition-all duration-300"
              >
                🗺️ Get Directions
              </Button>
            </div>
          </div>

          {/* Business Info Card */}
          <div className="bg-white p-4 rounded-lg border border-green-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <h4 className="font-semibold text-gray-800">{businessName}</h4>
                <p className="text-gray-600 text-sm">{businessAddress}</p>
                <p className="text-gray-600 text-sm">📞 {businessPhone}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <Button
                  onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(businessAddress)}`, '_blank')}
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-50 px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm"
                >
                  🗺️ Google Maps
                </Button>
                <Button
                  onClick={() => window.open(`https://maps.apple.com/?q=${encodeURIComponent(businessAddress)}`, '_blank')}
                  variant="outline"
                  className="border-gray-600 text-gray-600 hover:bg-gray-50 px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm"
                >
                  🍎 Apple Maps
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Map */}
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
          className="w-full h-96 md:h-[450px] bg-gray-100"
          role="application"
          aria-label="Interactive map showing business location"
        />
        
        {/* Map Attribution */}
        <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs text-gray-600">
          Powered by OpenStreetMap
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="p-6 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-2xl mb-2">🕒</div>
            <h4 className="font-semibold text-gray-800 mb-1">Office Hours</h4>
            <p className="text-gray-600 text-sm">Mon-Fri: 8AM-6PM<br />Sat-Sun: On-call</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-2xl mb-2">🚗</div>
            <h4 className="font-semibold text-gray-800 mb-1">Parking</h4>
            <p className="text-gray-600 text-sm">Free parking<br />available on-site</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-2xl mb-2">♿</div>
            <h4 className="font-semibold text-gray-800 mb-1">Accessibility</h4>
            <p className="text-gray-600 text-sm">Wheelchair accessible<br />entrance & facilities</p>
          </div>
        </div>
      </div>
    </div>
  )
}
