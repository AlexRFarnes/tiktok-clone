import { useDispatch } from 'react-redux';
import { logOut } from '../store/user';
import { ClearButton } from '../theme';

const LogOutButton = ({ className }) => {
  const dispatch = useDispatch();
  const logOutUser = () => {
    dispatch(logOut());
  };
  return (
    <ClearButton className={className} onClick={logOutUser}>
      Log Out
    </ClearButton>
  );
};

export default LogOutButton;
