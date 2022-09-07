import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import AppInput from '../components/AppInput';
import { createVideo } from '../store/videos';
import {
  AppButton,
  CenteredContainer,
  SmallContainer as SmallContainerTemplate,
} from '../theme';
import styled from 'styled-components';

const SmallContainer = styled(SmallContainerTemplate)`
  text-align: center;
`;

const VideosForm = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = async video => {
    const formData = new FormData();

    formData.append('title', video.title);
    formData.append('video', video.video[0]);
    dispatch(createVideo(formData));
  };

  return (
    <CenteredContainer>
      <SmallContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <AppInput type='text' label='Title' {...register('title')} />
          <AppInput type='file' label='Video' {...register('video')} />
          <AppButton type='submit' value='Upload' small>
            Upload
          </AppButton>
        </form>
      </SmallContainer>
    </CenteredContainer>
  );
};

export default VideosForm;
