import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { useAppSelector } from '../hooks';
import { toggleTheme } from '../features/theme/themeSlice';
import { useAppDispatch } from '../hooks';
function ThemeToggle() {
  const darkThemeEnabled = useAppSelector(
    (state) => state.themeState.darkThemeEnabled
  );
  const dispatch = useAppDispatch();
  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };
  return (
    <button
      className='toggle-btn'
      onClick={handleToggleTheme}
      aria-label='Toggle theme'
    >
      {darkThemeEnabled ? <BsFillSunFill /> : <BsFillMoonFill />}
    </button>
  );
}
export default ThemeToggle;
