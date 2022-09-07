import { Routes, Route, Link, Outlet, Navigate } from 'react-router-dom';
import HomePage from '../Home';
import SignIn from '../users/SignIn';
import SignUp from '../users/SignUp';
import Profile from '../users/Profile';
import Videos from '../videos/Videos';
import VideosForm from '../videos/VideosForm';
import VideoShow from '../videos/VideoShow';
import { useSelector } from 'react-redux';

const NotImplemented = () => {
  return (
    <>
      <Link to='/videos'>Go to videos</Link>
      <h1>This page is not yet ready</h1>
    </>
  );
};

const Error404 = () => {
  return (
    <>
      <Link to='/'>Go back to home</Link>
      <h1>Ooops! It seems this page does not exist - 404</h1>
    </>
  );
};

const AppRoutes = () => {
  const user = useSelector(state => state.user.user);
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />

      <Route
        path='/users'
        element={user ? <Navigate to='/videos' /> : <Outlet />}>
        <Route path='signup' element={<SignUp />} />
        <Route path='login' element={<SignIn />} />
      </Route>

      <Route
        path=''
        element={user ? <Outlet /> : <Navigate to='/users/login' />}>
        <Route path='/users/profile' element={<Profile />} />
        <Route path='/users/:id/videos' element={<NotImplemented />} />

        <Route path='/videos'>
          <Route path='' element={<Videos />} />
          <Route path='new' element={<VideosForm />} />
          <Route path=':id' element={<VideoShow />} />
        </Route>
      </Route>

      <Route path='*' element={<Error404 />}></Route>
    </Routes>
  );
};

export default AppRoutes;
