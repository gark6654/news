import { createSelector } from 'reselect';
import { RootState } from '@types';

const selectState = (state: RootState) => state;

export const selectCountryState = createSelector(selectState, state => state.country);
export const selectCountries = createSelector(selectCountryState, countryState => countryState.countries);
export const selectIsCountriesLoaded = createSelector(selectCountryState, countryState => countryState.loaded);
