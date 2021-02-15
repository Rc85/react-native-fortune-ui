import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { colors } from '../../constants';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Pressable } from 'react-native';
import type { ViewStyle } from 'react-native';

interface Props {
  type?: 'success' | 'error' | 'warning' | 'info' | 'light';
  icon: IconProp;
  transparent?: boolean;
  style?: object;
  iconColor?: string;
  rounded?: boolean;
  small?: boolean;
  onPress: Function;
}

export const IconButton = (props: Props) => {
  const buttonStyle: ViewStyle = {
    width: props.small ? 30 : 40,
    height: props.small ? 30 : 40,
    padding: props.small ? 10 : 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: props.iconColor || colors.lightGrey,
    borderRadius: props.rounded ? 100 : 0
  };
  const iconColor = { color: props.iconColor || colors.white };

  if (props.type === 'success') {
    buttonStyle.backgroundColor = colors.lightGreen;
  } else if (props.type === 'error') {
    buttonStyle.backgroundColor = colors.red;
  } else if (props.type === 'warning') {
    buttonStyle.backgroundColor = colors.yellow;
    iconColor.color = props.iconColor || colors.black;
  } else if (props.type === 'info') {
    buttonStyle.backgroundColor = colors.blue;
  } else if (props.type === 'light') {
    buttonStyle.backgroundColor = colors.lightGrey;
  }

  if (props.transparent) {
    buttonStyle.backgroundColor = 'transparent';
  }

  const containerStyle = { ...buttonStyle, ...props.style };

  const handlePress = () => {
    props.onPress();
  };

  return (
    <Pressable style={containerStyle} onPress={handlePress}>
      <FontAwesomeIcon icon={props.icon} color={iconColor.color} />
    </Pressable>
  );
};

export default IconButton;
