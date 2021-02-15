import React, { useContext } from 'react';
import type { PressableProps } from 'react-native';
import { Text, Pressable, ViewStyle } from 'react-native';
import { ThemeContext } from '../../context/ThemeContext';
import { colors } from '../../constants';
import { themes } from '../../themes';

interface Props extends PressableProps {
  type?: 'success' | 'error' | 'info' | 'warning';
  children: string;
  style?: any;
  rounded?: boolean;
  small?: boolean;
  outlined?: boolean;
  disabled?: boolean;
}

export const Button = (props: Props) => {
  const style: ViewStyle = {
    paddingTop: props.small ? 7 : 12,
    paddingBottom: props.small ? 7 : 12,
    paddingLeft: props.small ? 12 : 17,
    paddingRight: props.small ? 12 : 17,
    borderRadius: props.rounded ? 3 : 0
  };
  const textColor = { color: colors.white };
  const { themeName } = useContext(ThemeContext);

  style.borderLeftWidth = 1;
  style.borderTopWidth = 1;
  style.borderRightWidth = 1;
  style.borderBottomWidth = 1;

  style.borderLeftColor = colors.grey;
  style.borderRightColor = colors.grey;
  style.borderBottomColor = colors.grey;
  style.borderTopColor = colors.grey;
  style.borderStyle = 'solid';

  style.backgroundColor = colors.grey;

  if (props.type === 'success') {
    style.borderLeftColor = colors.lightGreen;
    style.borderRightColor = colors.lightGreen;
    style.borderBottomColor = colors.lightGreen;
    style.borderTopColor = colors.lightGreen;
    style.backgroundColor = colors.lightGreen;
  } else if (props.type === 'error') {
    style.borderLeftColor = colors.red;
    style.borderRightColor = colors.red;
    style.borderBottomColor = colors.red;
    style.borderTopColor = colors.red;
    style.backgroundColor = colors.red;
  } else if (props.type === 'info') {
    style.borderLeftColor = colors.lightBlue;
    style.borderRightColor = colors.lightBlue;
    style.borderBottomColor = colors.lightBlue;
    style.borderTopColor = colors.lightBlue;
    style.backgroundColor = colors.lightBlue;
  } else if (props.type === 'warning') {
    style.borderLeftColor = colors.yellow;
    style.borderRightColor = colors.yellow;
    style.borderBottomColor = colors.yellow;
    style.borderTopColor = colors.yellow;
    style.backgroundColor = colors.yellow;
    textColor.color = colors.black;
  }

  if (props.disabled) {
    style.borderLeftColor = themes[themeName].disabledButtonColor;
    style.borderRightColor = themes[themeName].disabledButtonColor;
    style.borderBottomColor = themes[themeName].disabledButtonColor;
    style.borderTopColor = themes[themeName].disabledButtonColor;
    style.backgroundColor = themes[themeName].disabledButtonColor;

    textColor.color = themes[themeName].disabledButtonTextColor;
  }

  if (props.outlined) {
    style.backgroundColor = 'transparent';
    textColor.color = colors.grey;

    if (props.type === 'success') {
      textColor.color = colors.lightGreen;
    } else if (props.type === 'error') {
      textColor.color = colors.red;
    } else if (props.type === 'info') {
      textColor.color = colors.lightBlue;
    } else if (props.type === 'warning') {
      textColor.color = colors.yellow;
    }

    if (props.disabled) {
      textColor.color = themes[themeName].disabledButtonColor;
    }
  }

  const containerStyle = { ...style, ...props.style };
  const textStyle = { color: textColor.color };

  return (
    <Pressable {...props} style={containerStyle}>
      <Text style={[textStyle]}>{props.children}</Text>
    </Pressable>
  );
};

export default Button;
