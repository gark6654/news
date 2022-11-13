import { createSelector } from 'reselect';
import { RootState } from '@types';

const selectAuthState = (state: RootState) => state.auth;

export const selectUser = createSelector(selectAuthState, (authState) => authState.user);
