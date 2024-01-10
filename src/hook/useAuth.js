import { useSelector } from 'react-redux';
import authSelectors from '../redux/auth/authSelector';

export const useAuth = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isRefreshing = useSelector(authSelectors.getRefreshing);
  const user = useSelector(authSelectors.getUserEmail);
  const BackEndError = useSelector(authSelectors.getError);


  return {
    isLoggedIn,
    isRefreshing,
    user,
    BackEndError,
  };
};