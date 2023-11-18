export const getIsLoggedIn = state => state.auth.isLogin;

export const getUserEmail = state => state.auth.user.email;

export const getRefreshing = state => state.auth.isRefreshing;


const authSelectors = {
    getIsLoggedIn,
    getUserEmail,
    getRefreshing
}

export default authSelectors;