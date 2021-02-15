import React from 'react';
import { ThemeContext } from '../../context/ThemeContext';

interface Props {
  children: any;
  value: any;
}

export const ThemeProvider = (props: Props) => {
  return <ThemeContext.Provider value={props.value}>{props.children}</ThemeContext.Provider>;
};

export default ThemeProvider;
