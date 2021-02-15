import React from 'react';
import type { TextInputProps } from 'react-native';
import { View, TextInput, ViewStyle } from 'react-native';
import { colors } from '../../constants';
import Text from '../Text/Text';

interface Props extends TextInputProps {
  outlined?: boolean;
  rounded?: boolean;
  style?: object;
  label?: string;
  labelBackgroundColor?: string;
  startAdornment?: string;
  endAdornment?: string;
  textInputStyle?: object;
}

export const Input = (props: Props) => {
  const containerStyle: ViewStyle = {
    marginBottom: 10,
    flexDirection: 'row',
    backgroundColor: props.outlined ? colors.white : 'transparent'
  };
  const textInputStyle: ViewStyle = {
    flexGrow: 1,
    paddingTop: 0,
    paddingBottom: props.outlined ? 5 : 0
  };

  if (props.outlined) {
    containerStyle.borderWidth = 1;
    containerStyle.borderColor = colors.lightGrey;
    containerStyle.borderStyle = 'solid';

    textInputStyle.paddingLeft = 10;
    textInputStyle.paddingRight = 10;

    if (props.rounded) {
      containerStyle.borderRadius = 5;
    }
  } else {
    containerStyle.borderBottomWidth = 1;
    containerStyle.borderBottomColor = colors.lightGrey;
    containerStyle.borderStyle = 'solid';
  }

  const textInputProps = {
    ...props,
    style: { ...textInputStyle, ...props.textInputStyle }
  };

  const adornmentStyle: ViewStyle = {
    backgroundColor: props.outlined ? colors.lightGrey : 'transparent',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: props.outlined ? 0 : 15
  };
  const adornmentTextStyle = { color: colors.grey };
  const inputContainerStyle: ViewStyle = {
    flexGrow: 1
  };
  const inputLabelStyle = { marginLeft: props.outlined ? 10 : 0 };
  const inputWrapperStyle: ViewStyle = { flexDirection: 'row' };

  return (
    <View style={containerStyle}>
      {props.startAdornment && (
        <View style={adornmentStyle}>
          <Text style={adornmentTextStyle}>{props.startAdornment}</Text>
        </View>
      )}

      <View style={inputContainerStyle}>
        {props.label && (
          <Text note style={inputLabelStyle}>
            {props.label}
          </Text>
        )}

        <View style={inputWrapperStyle}>
          <TextInput {...textInputProps} />
        </View>
      </View>

      {props.endAdornment && (
        <View style={adornmentStyle}>
          <Text style={adornmentTextStyle}>{props.endAdornment}</Text>
        </View>
      )}
    </View>
  );
};

export default Input;
