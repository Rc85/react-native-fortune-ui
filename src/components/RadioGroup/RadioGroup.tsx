import React from 'react';
import { Pressable, View } from 'react-native';
import Text from '../Text/Text';
import type { ViewStyle } from 'react-native';
import { colors } from '../../constants';

interface Props {
  orientation?: 'row' | 'column';
  items: Array<{ value: string; label: string }>;
  value?: string;
  onChange: Function;
  textSize?: number;
}

export const RadioGroup = (props: Props) => {
  const containerStyle: ViewStyle = {
    flexDirection: props.orientation || 'column',
    alignItems: props.orientation === 'row' ? 'center' : 'flex-start'
  };

  const pressableStyle: ViewStyle = {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: !props.orientation || props.orientation === 'column' ? 10 : 0,
    marginRight: props.orientation === 'row' ? 10 : 0
  };
  const radioContainerStyle: ViewStyle = {
    borderRadius: 100,
    borderColor: colors.grey,
    borderWidth: 1,
    width: 20,
    height: 20,
    backgroundColor: colors.white,
    borderStyle: 'solid',
    marginRight: 5
  };
  const radioStyle = { margin: 3, flex: 1, backgroundColor: colors.blue, borderRadius: 100 };
  const textStyle = { fontSize: props.textSize || 12 };

  return (
    <View style={[containerStyle]}>
      {props.items.map((item) => (
        <Pressable key={item.value} style={pressableStyle} onPress={() => props.onChange(item)}>
          <View style={radioContainerStyle}>{props.value === item.value && <View style={radioStyle} />}</View>

          <Text style={textStyle}>{item.label}</Text>
        </Pressable>
      ))}
    </View>
  );
};

export default RadioGroup;
