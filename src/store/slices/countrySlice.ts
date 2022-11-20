import { createSlice } from '@reduxjs/toolkit';
import { ICountriesState } from '@types';
import countries from '@constants/countries.json';
import { groupByName } from '@utils';

const initialState: ICountriesState = {
  countries: [],
  loaded: false,
};

export const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    getCountryByName: (state, action) => {
      const searchValue = action.payload;
      if (searchValue) {
        const search = new RegExp(searchValue.toLowerCase());
        return {
          countries: groupByName(countries.filter(country => search.test(country.toLowerCase()))),
          loaded: true,
        };
      }

      return {
        countries: groupByName(countries),
        loaded: true,
      };
    },
  },
});

export const { getCountryByName } = countrySlice.actions;
export default countrySlice.reducer;
