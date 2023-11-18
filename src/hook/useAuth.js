import { useSelector } from 'react-redux';
import authSelectors from '../redux/auth/authSelector';

export const useAuth = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isRefreshing = useSelector(authSelectors.getRefreshing);
  const user = useSelector(authSelectors.getUserEmail);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};