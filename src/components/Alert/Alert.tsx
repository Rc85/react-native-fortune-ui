import React from 'react';
import { View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faCheckCircle,
  faExclamationCircle,
  faExclamationTriangle,
  faInfoCircle
} from '@fortawesome/free-solid-svg-icons';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { colors } from '../../constants';
import Text from '../../components/Text/Text';
import type { ViewStyle } from 'react-native';

interface Props {
  children: any;
  type?: 'success' | 'error' | 'warning' | 'info';
  style?: object;
  icon?: any;
}

export const Alert = (props: Props) => {
  let icon: IconProp | undefined = faCheckCircle;
  let iconColor: string = colors.darkGreen;
  let backgroundColor: string = colors.fadedGreen;

  if (props.type === 'success') {
    icon = faCheckCircle;
    iconColor = colors.darkGreen;
  } else if (props.type === 'error') {
    icon = faExclamationCircle;
    iconColor = colors.darkRed;
    backgroundColor = colors.fadedRed;
  } else if (props.type === 'warning') {
    icon = faExclamationTriangle;
    iconColor = colors.darkOrange;
    backgroundColor = colors.fadedYellow;
  } else if (props.type === 'info') {
    icon = faInfoCircle;
    iconColor = colors.darkTurquoise;
    backgroundColor = colors.fadedBlue;
  }

  const containerStyle: ViewStyle = {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: iconColor,
    borderStyle: 'solid',
    backgroundColor,
    borderRadius: 5,
    ...props.style
  };

  const iconStyle = { marginRight: 5 };

  return (
    <View style={[containerStyle]}>
      {props.icon || <FontAwesomeIcon icon={icon} color={iconColor} size={20} style={iconStyle} />}

      <View>
        <Text color={iconColor}>{props.children}</Text>
      </View>
    </View>
  );
};

export default Alert;
