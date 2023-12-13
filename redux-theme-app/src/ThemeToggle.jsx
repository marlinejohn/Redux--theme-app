
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from './redux/actions';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <div>
      <p>Current Theme: {theme}</p>
      <button onClick={handleToggle}>Toggle Theme</button>
    </div>
  );
};

export default ThemeToggle;
