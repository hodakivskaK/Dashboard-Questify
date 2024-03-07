export const getIsLoggedIn = state => state.auth.isLogin;

export const getUserEmail = state => state.auth.user.email;

export const getError = state => state.auth.error;


const authSelectors = {
    getIsLoggedIn,
    getUserEmail,
    getError
}

export default authSelectors;