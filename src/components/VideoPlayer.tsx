'use client'
import React from 'react'
import dynamic from 'next/dynamic'

// Dynamically import ReactPlayer to avoid SSR issues
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })

interface VideoPlayerProps {
  onReady?: () => void
  onPlay?: () => void
  onPause?: () => void
  onError?: (error: Error) => void
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ 
  onReady, 
  onPlay, 
  onPause, 
  onError 
}) => {
  const videoSources = [
    // Reliable test videos
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    'https://www.w3schools.com/html/mov_bbb.mp4',
    'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    // Your custom videos
    '/videos/atdoor-services.mp4',
    'https://atdoorhc.com/wp-content/uploads/2025/05/atdoor-services.mp4'
  ]

  return (
    <div className="absolute inset-0 w-full h-full">
      <ReactPlayer
        url={videoSources[0]} // Use first source, ReactPlayer will try others automatically
        playing={true}
        muted={true}
        loop={true}
        controls={false}
        width="100%"
        height="100%"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 1
        }}
        onReady={() => {
          console.log('🎥 ReactPlayer ready')
          onReady?.()
        }}
        onStart={() => {
          console.log('▶️ ReactPlayer started')
          onPlay?.()
        }}
        onPlay={() => {
          console.log('▶️ ReactPlayer playing')
          onPlay?.()
        }}
        onPause={() => {
          console.log('⏸️ ReactPlayer paused')
          onPause?.()
        }}
        onError={(error) => {
          console.error('❌ ReactPlayer error:', error)
          onError?.(new Error('Video playback failed'))
        }}
        onBuffer={() => console.log('⏳ ReactPlayer buffering')}
        onBufferEnd={() => console.log('✅ ReactPlayer buffer ended')}
      />
    </div>
  )
}

export default VideoPlayer
