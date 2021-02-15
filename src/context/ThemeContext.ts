import React from 'react';

const context = {
  themeName: 'light',
  toggle: () => {}
};

export const ThemeContext = React.createContext(context);
