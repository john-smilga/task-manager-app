export const THEME_KEY = 'darkTheme';
export const DARK_THEME_CLASS = 'dark-theme';

export const getInitialThemeStatus = (): boolean => {
  const darkThemeEnabled = localStorage.getItem(THEME_KEY) === 'true';
  document.body.classList.toggle(DARK_THEME_CLASS, darkThemeEnabled);
  return darkThemeEnabled;
};
