"use client"
import { useState } from 'react'
import { Button } from './button'

interface GoogleMapsEmbedProps {
  businessAddress: string
  businessName: string
  businessPhone: string
}

export default function GoogleMapsEmbed({ businessAddress, businessName, businessPhone }: GoogleMapsEmbedProps) {
  const [userAddress, setUserAddress] = useState('')

  // Encode the business address for URL
  const encodedBusinessAddress = encodeURIComponent(businessAddress)
  
  // Google Maps Embed API URL (completely free, no API key needed)
  const embedUrl = `https://www.google.com/maps/embed/v1/place?q=${encodedBusinessAddress}&zoom=15`

  const openDirections = () => {
    const origin = userAddress.trim() 
      ? encodeURIComponent(userAddress)
      : ''
    const destination = encodedBusinessAddress
    
    if (origin) {
      // Open Google Maps with directions from user's address
      window.open(
        `https://www.google.com/maps/dir/${origin}/${destination}`,
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

  const detectLocation = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by this browser.')
      return
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords
        // Open directions using coordinates
        window.open(
          `https://www.google.com/maps/dir/${latitude},${longitude}/${encodedBusinessAddress}`,
          '_blank'
        )
      },
      (error) => {
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
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-all duration-300 whitespace-nowrap"
              >
                📍 Use My Location
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
                  onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodedBusinessAddress}`, '_blank')}
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-50 px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm"
                >
                  🗺️ View on Google Maps
                </Button>
                <Button
                  onClick={() => window.open(`https://maps.apple.com/?q=${encodedBusinessAddress}`, '_blank')}
                  variant="outline"
                  className="border-gray-600 text-gray-600 hover:bg-gray-50 px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm"
                >
                  🍎 View on Apple Maps
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Embedded Google Map */}
      <div className="relative">
        <iframe
          src={embedUrl}
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Map showing location of ${businessName}`}
          className="w-full"
        />
        
        {/* Overlay with business info */}
        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-xs">
          <h4 className="font-semibold text-gray-800 mb-1">{businessName}</h4>
          <p className="text-gray-600 text-sm mb-2">{businessAddress}</p>
          <p className="text-gray-600 text-sm">📞 {businessPhone}</p>
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
