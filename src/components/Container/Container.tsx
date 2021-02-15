import React, { useContext } from 'react';
import type { ScrollViewProps } from 'react-native';
import { ScrollView } from 'react-native';
import { ThemeContext } from '../../context/ThemeContext';
import { themes } from '../../themes';

interface Props extends ScrollViewProps {
  style?: object;
  children: any;
}

export const Container = (props: Props) => {
  const { themeName } = useContext(ThemeContext);

  const containerStyle = {
    padding: 10,
    backgroundColor: themes[themeName].background,
    ...props.style
  };

  return (
    <ScrollView {...props} contentContainerStyle={containerStyle}>
      {props.children}
    </ScrollView>
  );
};

export default Container;
