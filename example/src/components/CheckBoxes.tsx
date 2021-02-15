import React from 'react';
import { Text, CheckBox } from 'react-native-fortune-ui';
import { View } from 'react-native';
import { styles } from '../styles';

export const CheckBoxes = () => {
  const [checked, setChecked] = React.useState(true);

  return (
    <React.Fragment>
      <Text heading note uppercase>
        Checkbox
      </Text>

      <View style={[styles.mb15]}>
        <CheckBox label='This is a checked' checked={checked} onPress={() => setChecked(!checked)} />
      </View>
    </React.Fragment>
  );
};

export default CheckBoxes;
