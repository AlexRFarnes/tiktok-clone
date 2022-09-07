import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadVideosForUser } from '../store/videos';
import { AppButton as AppButtonTemplate, SmallContainer } from '../theme';
import styled from 'styled-components';
import VideoThumbnail from '../videos/Thumbnail';
import LogOutButtonTemplate from './LogOutButton';

const ProfileHeader = styled.header`
  display: grid;
  grid-template-columns: repeat(6, minmax(auto, 1fr));
  grid-template-rows: repeat(4, 100px);
  grid-template-areas:
    'imageContainer imageContainer imageContainer imageContainer imageContainer imageContainer'
    'userInfo userInfo userInfo userInfo userInfo userInfo'
    'following following followers followers likes likes'
    'edit edit edit logOut logOut logOut';
  text-align: center;

  padding: ${({ theme }) => theme.dimensions.padding.largePadding};
  & .image-container {
    grid-area: imageContainer;
    justify-self: center;
  }
  & .info-container {
    grid-area: userInfo;
  }
`;

const AppButton = styled(AppButtonTemplate)`
  grid-area: edit;
  display: block;
  width: 100%;
`;

const LogOutButton = styled(LogOutButtonTemplate)`
  grid-area: logOut;
  display: block;
  width: 100%;
`;

const ProfileImage = styled.img`
  max-height: 100%;
  border-radius: 50%;
`;

const Pill = styled.span`
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: ${({ theme }) => theme.dimensions.borderRadius.normal};
  font-size: ${({ theme }) => theme.dimensions.fonts.small};
  padding: ${({ theme }) => theme.dimensions.padding.largePadding};
  display: inline-block;
`;

const Counter = styled.div`
  grid-area: ${({ area }) => area};
  & .number {
    font-size: ${({ theme }) => theme.dimensions.fonts.medium};
    display: block;
  }
  & .description {
    color: ${({ theme }) => theme.colors.silver};
  }
`;

const VideosContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(auto, 1fr));
`;

const Profile = () => {
  const user = useSelector(state => state.user.user);
  const videos = useSelector(state => state.videos.data.videos);
  const disptach = useDispatch();

  useEffect(() => {
    disptach(loadVideosForUser());
  }, []);

  return (
    <SmallContainer>
      <ProfileHeader>
        <div className='image-container'>
          <ProfileImage src='/avatar.jpg' alt='Profile' />
        </div>
        <div className='info-container'>
          <p>
            <strong>@{user.username}</strong>
          </p>
          <Pill>
            {videos.length} {videos.length === 1 ? 'video' : 'videos'}
          </Pill>
        </div>
        <Counter area='following'>
          <p className='number'>0</p>
          <p className='description'>Following</p>
        </Counter>
        <Counter area='followers'>
          <p className='number'>0</p>
          <p className='description'>Followers</p>
        </Counter>
        <Counter area='likes'>
          <p className='number'>0</p>
          <p className='description'>Likes</p>
        </Counter>
        <AppButton>Edit</AppButton>
        <LogOutButton />
      </ProfileHeader>
      <VideosContainer>
        {videos &&
          videos.map((video, index) => (
            <VideoThumbnail key={index} video={video} />
          ))}
      </VideosContainer>
    </SmallContainer>
    // <div>
    //   <h1>Videos for {user.user.username}</h1>
    //   {videos.map(video => (
    //     <div key={video.id}>
    //       <h2>{video.title}</h2>
    //       <Player video={video} />
    //     </div>
    //   ))}
    // </div>
  );
};

export default Profile;
