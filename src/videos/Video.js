import styled from 'styled-components';
import LikeButton from './LikeButton';
import Player from './Player';
import ShareButton from './ShareButton';

const VideoContainer = styled.div`
  position: relative;
  padding-bottom: 177%;
  margin-bottom: ${({ theme }) => theme.dimensions.margin.normal};
  background: ${({ theme }) => theme.colors.dark};

  & iframe {
    z-index: 1;
  }

  & .info {
    position: absolute;
    z-index: 2;
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    grid-template-rows: minmax(0, 1fr) 100px;
    grid-template-areas:
      'main sidebar'
      'info sidebar';
    align-items: start;
    transition: opacity 0.2s ease-in;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;

    & article,
    & aside,
    & .user-info {
      padding: ${({ theme }) => theme.dimensions.padding.largePadding};
    }

    & article.main {
      grid-area: main;
    }
    & aside.sidebar {
      grid-area: sidebar;
    }
    & .user-info {
      grid-area: info;
      align-self: middle;
    }
  }
`;

const Video = ({ video }) => {
  return (
    <VideoContainer key={video.id}>
      <div className='info'>
        <aside className='sidebar'>
          <LikeButton video={video} />
          <ShareButton />
        </aside>
        <div className='user-info'>
          <h2>{video.title}</h2>
        </div>
      </div>
      <Player video={video} />
    </VideoContainer>
  );
};

export default Video;
