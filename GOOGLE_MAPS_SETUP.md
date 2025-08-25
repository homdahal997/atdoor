# Map Integration Setup Guide

## 🆓 **Currently Active: 100% FREE OpenStreetMap**

The Contact Us page uses **OpenStreetMap with Leaflet** - completely free with these features:
- ✅ **No API key required**
- ✅ **No billing setup needed**
- ✅ **No usage limits**
- ✅ **Interactive map** with zoom, pan, and full-screen controls
- ✅ **Custom business marker** with healthcare styling
- ✅ **Popup with business info** and directions link
- ✅ **Address input** for directions
- ✅ **Location detection** using browser geolocation
- ✅ **Direct links** to Google Maps and Apple Maps for navigation
- ✅ **Professional healthcare design**
- ✅ **Responsive design** for mobile and desktop
- ✅ **Office hours and accessibility info**

## 🚀 **Optional: Google Maps JavaScript API**

For Google Maps branding, you can upgrade to the JavaScript API (requires billing setup):
- Google Maps styling and branding
- Real-time route calculation with distance/time display
- Advanced geocoding and validation
- More Google-specific features

## Setup Instructions

### 1. Get Google Maps API Key

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the following APIs:
   - **Maps JavaScript API**
   - **Places API** 
   - **Geocoding API**
   - **Distance Matrix API**

4. Go to "Credentials" and create a new API key
5. Restrict the API key for security:
   - Add your domain(s) to HTTP referrers
   - Restrict to the APIs listed above

### 2. Configure Environment Variables

1. Copy the example environment file:
   ```bash
   cp .env.local.example .env.local
   ```

2. Edit `.env.local` and add your API key:
   ```
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_actual_api_key_here
   ```

3. Restart your development server:
   ```bash
   npm run dev
   ```

### 3. Enable Billing (Required)

Google Maps APIs require billing to be enabled on your Google Cloud project, even for the free tier usage.

1. Go to the [Google Cloud Console Billing](https://console.cloud.google.com/billing)
2. Link a billing account to your project
3. Set up billing alerts to monitor usage

### 4. API Usage Limits

The free tier includes:
- **Maps JavaScript API**: $200 credit per month (28,000 map loads)
- **Geocoding API**: $200 credit per month (40,000 requests)
- **Distance Matrix API**: $200 credit per month (40,000 requests)

## Features Implemented

### Interactive Map
- Custom business marker with healthcare icon
- Info window with business details and direct directions link
- Zoom, pan, and street view controls
- Responsive design for all screen sizes

### User Location & Directions
- "Detect My Location" button using browser geolocation
- Manual address input with validation
- Real-time route calculation showing distance and travel time
- "Get Directions" button opening Google Maps with turn-by-turn navigation

### Error Handling & Fallbacks
- Graceful handling of API key issues
- Location permission denied scenarios
- Network connectivity problems
- Fallback links to Google Maps and Apple Maps when interactive map fails

### Accessibility Features
- Proper ARIA labels for screen readers
- Keyboard navigation support
- Clear error messages and loading states
- Semantic HTML structure

## Component Usage

The Google Maps component is used in the Contact page:

```tsx
<GoogleMaps 
  businessAddress="8501 Mayland Dr, Suite 103A, Richmond VA 23294"
  businessName="At Door HealthCare"
  businessPhone="(804) 302-4673"
/>
```

## Troubleshooting

### Common Issues

1. **Map not loading**: Check that your API key is correct and billing is enabled
2. **Geocoding errors**: Ensure the Geocoding API is enabled
3. **Route calculation fails**: Verify the Distance Matrix API is enabled
4. **Location detection not working**: This requires HTTPS in production

### Testing

1. Test with a valid address to ensure geocoding works
2. Try the location detection feature (requires HTTPS)
3. Verify route calculation displays distance and time
4. Test the "Get Directions" button opens Google Maps correctly

## Security Considerations

1. **API Key Restrictions**: Always restrict your API key to specific domains
2. **Rate Limiting**: Monitor API usage to prevent unexpected charges
3. **HTTPS Required**: Location detection requires HTTPS in production
4. **Environment Variables**: Never commit API keys to version control

## Production Deployment

1. Ensure your production domain is added to API key restrictions
2. Set up monitoring and billing alerts
3. Test all features on the production domain
4. Consider implementing caching for geocoding results to reduce API calls

## Support

For issues with the Google Maps integration:
1. Check the browser console for error messages
2. Verify API key permissions and billing status
3. Test with different addresses and locations
4. Ensure all required APIs are enabled in Google Cloud Console
