import { createSelector } from 'reselect';
import { RootState } from '@types';

const selectAuthState = (state: RootState) => state.auth;

export const selectAuth = createSelector(selectAuthState, authState => authState);
export const selectUser = createSelector(selectAuthState, authState => authState.user);
export const selectUserLoaded = createSelector(selectAuthState, authState => authState.isLoaded);
export const selectUserSigned = createSelector(selectAuthState, authState => authState.isSigned);
