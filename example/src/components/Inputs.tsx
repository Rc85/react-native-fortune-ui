import React from 'react';
import { Text, Input } from 'react-native-fortune-ui';
import { View } from 'react-native';
import { styles } from '../styles';

export const Inputs = () => {
  return (
    <React.Fragment>
      <Text heading note>
        INPUTS
      </Text>

      <View style={[styles.mb15]}>
        <Input outlined label='Outlined' placeholder='Outlined text input' />
        <Input outlined label='Rounded' rounded />
        <Input label='Rounded' rounded />
        <Input label='Dollar' rounded startAdornment='$' endAdornment='.00' />
        <Input label='Distance' rounded outlined startAdornment='Drove:' endAdornment='km' />
      </View>
    </React.Fragment>
  );
};

export default Inputs;
