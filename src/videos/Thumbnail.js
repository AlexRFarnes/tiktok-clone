import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Thumbnail = styled.div`
  padding-bottom: 177%;
  margin-bottom: ${({ theme }) => theme.dimensions.margin.normal};
  background: ${({ video }) => `url(${video.thumbnail})`};
  background-size: cover;
  background-position: center;
`;

const VideoThumbnail = ({ video }) => {
  return (
    <Link to={`/videos/${video.id}`}>
      <Thumbnail video={video} />
    </Link>
  );
};

export default VideoThumbnail;
