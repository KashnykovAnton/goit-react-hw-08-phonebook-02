export const getAuth = state => state.auth.isAuth;
export const getUser = state => state.auth.user.name;
export const getIsFetchingCurrent = state => state.auth.isFetchingCurrent;
