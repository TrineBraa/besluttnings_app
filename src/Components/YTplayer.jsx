import React, { useEffect, useRef, useState } from 'react';

const YouTubeAudioPlayer = ({ videoId }) => {
  const playerRef = useRef(null);
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  useEffect(() => {
    const onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player('youtube-player', {
        height: '0',
        width: '0', 
        videoId: videoId,
        playerVars: {
          autoplay: 0,
          controls: 0,
          mute: 0,
        },
        events: {
          onReady: () => {
            setIsPlayerReady(true);
          },
        },
      });
    };

    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    script.async = true;
    document.body.appendChild(script);
    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, [videoId]);

  const playAudio = () => {
    if (isPlayerReady && playerRef.current) {
      playerRef.current.playVideo();
      
    }
  };

  return (
    <div>
      <div id="youtube-player" style={{ width: '1px', height: '1px' }} /* style={{ display: 'none' }} */></div>
      <button onClick={playAudio} className="bg-blue-500 text-white p-2 rounded">
        Play Audio
      </button>
    </div>
  );
};

export default YouTubeAudioPlayer;
