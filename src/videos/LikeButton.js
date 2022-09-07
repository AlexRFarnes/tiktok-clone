import { ClearButton, SvgButton } from '../theme';
import { likeVideo } from '../store/likes';
import { useDispatch } from 'react-redux';

const LikeButton = ({ video }) => {
  let dispatch = useDispatch();

  const doLike = videoId => {
    dispatch(likeVideo(videoId));
  };
  return (
    <ClearButton onClick={() => doLike(video.id)}>
      <SvgButton
        src='/heart.svg'
        active={video.isLikedByCurrentUser}></SvgButton>
    </ClearButton>
  );
};

export default LikeButton;
