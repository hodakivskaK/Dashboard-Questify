export const getIsLoggedIn = state => state.auth.isLogin;

export const getUserEmail = state => state.auth.user.email;

export const getRefreshing = state => state.auth.isRefreshing;

export const getError = state => state.auth.error;


const authSelectors = {
    getIsLoggedIn,
    getUserEmail,
    getRefreshing,
    getError
}

export default authSelectors;