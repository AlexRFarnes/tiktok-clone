import { PlayerSdk } from '@api.video/player-sdk';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Iframe = styled.iframe`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
`;

const Player = ({ video }) => {
  const player = useRef(null);
  useEffect(() => {
    if (!player.current) {
      player.current = new PlayerSdk(`#appPlayer-${video.id}`);
      player.current.mute();
      player.current.play();
      player.current.setLoop(true);
    }
  }, [video.id]);
  return (
    <Iframe
      title={video.title}
      src={`https://embed.api.video/vod/${video.remoteVideoId}`}
      width='100%'
      height='100%'
      scrolling='no'
      id={`appPlayer-${video.id}`}
      allowFullScreen={true}
      frameBorder='0'></Iframe>
  );
};

export default Player;
