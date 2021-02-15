import React from 'react';
import { Pressable, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { colors } from '../../constants';
import Text from '../../components/Text/Text';
import type { ViewStyle } from 'react-native';

interface Props {
  label: string;
  style?: object;
  onPress: Function;
  checked?: boolean;
  textColor?: string;
  textSize?: number;
}

export const CheckBox = (props: Props) => {
  const iconStyle: any = {
    position: 'absolute',
    top: -2,
    left: -2
  };
  const containerStyle: ViewStyle = {
    flexDirection: 'row',
    alignItems: 'center'
  };
  const checkContainerStyle: ViewStyle = {
    width: 21,
    height: 21,
    borderWidth: 3,
    borderColor: props.checked ? colors.blue : colors.grey,
    borderRadius: 3,
    position: 'relative',
    marginRight: 5
  };
  const textStyle = { flexShrink: 1 };

  return (
    <Pressable onPress={() => props.onPress()} style={props.style}>
      <View style={containerStyle}>
        <View style={checkContainerStyle}>
          {props.checked && (
            <FontAwesomeIcon icon={faCheckSquare} color={colors.blue} size={19} style={iconStyle} />
          )}
        </View>

        <Text color={props.textColor} style={textStyle}>
          {props.label}
        </Text>
      </View>
    </Pressable>
  );
};

export default CheckBox;
