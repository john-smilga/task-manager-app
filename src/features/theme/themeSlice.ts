import { createSlice } from '@reduxjs/toolkit';
import {
  THEME_KEY,
  DARK_THEME_CLASS,
  getInitialThemeStatus,
} from '../../utils/themeUtils';

type ThemeState = {
  darkThemeEnabled: boolean;
};

const initialState: ThemeState = {
  darkThemeEnabled: getInitialThemeStatus(),
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      const updatedDarkThemeStatus = !state.darkThemeEnabled;
      state.darkThemeEnabled = updatedDarkThemeStatus;
      document.body.classList.toggle(DARK_THEME_CLASS, updatedDarkThemeStatus);
      localStorage.setItem(THEME_KEY, JSON.stringify(updatedDarkThemeStatus));
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
