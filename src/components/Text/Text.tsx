import React, { useContext } from 'react';
import type { TextProps } from 'react-native';
import { Text as RNText, TextStyle } from 'react-native';
import { ThemeContext } from '../../context/ThemeContext';
import { themes } from '../../themes';

interface Props extends TextProps {
  children: string;
  heading?: number | boolean;
  note?: boolean;
  capitalized?: boolean;
  uppercase?: boolean;
  bold?: boolean;
  underlined?: boolean;
  striked?: boolean;
  emphasized?: boolean;
  large?: boolean;
  color?: string;
  list?: boolean;
  style?: object;
}

export const Text = (props: Props) => {
  const { themeName } = useContext(ThemeContext);
  const style: TextStyle = { color: props.color || themes[themeName].text };

  if (props.capitalized) {
    style.textTransform = 'capitalize';
  }

  if (props.uppercase) {
    style.textTransform = 'uppercase';
  }

  if (props.bold) {
    style.fontWeight = 'bold';
  }

  if (props.underlined) {
    style.textDecorationLine = 'underline';
  }

  if (props.striked) {
    style.textDecorationLine = 'line-through';
  }

  if (props.underlined && props.striked) {
    style.textDecorationLine = 'underline line-through';
  }

  if (props.emphasized) {
    style.fontStyle = 'italic';
  }

  if (props.large) {
    style.fontSize = 20;
  }

  if (props.heading && !props.note) {
    style.marginBottom = 15;
    style.fontWeight = 'bold';

    if (props.heading === 1) {
      style.fontSize = 26;
    } else if (props.heading === 2) {
      style.fontSize = 22;
    } else if (props.heading === 3) {
      style.fontSize = 18;
    }
  } else if (props.heading && props.note) {
    style.marginBottom = 15;
    style.fontSize = 12;
    style.color = themes[themeName].subtitle;
  } else if (!props.heading && props.note) {
    style.fontSize = 12;
    style.color = themes[themeName].subtitle;
  }

  const textStyle = { ...style, ...props.style };

  return (
    <RNText {...props} style={textStyle}>
      {props.list && `\u2022 `}
      {props.children}
    </RNText>
  );
};

export default Text;
