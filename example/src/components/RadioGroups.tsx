import React from 'react';
import { Text, RadioGroup } from 'react-native-fortune-ui';
import { View } from 'react-native';
import { styles } from '../styles';

export const RadioGroups = () => {
  const [radioValue, setRadioValue] = React.useState('1');

  return (
    <React.Fragment>
      <Text heading note>
        RADIO GROUP
      </Text>

      <View style={[styles.mb15]}>
        <RadioGroup
          value={radioValue}
          items={[
            { label: 'Column Radio 1', value: '1' },
            { label: 'Column Radio 2', value: '2' },
            { label: 'Column Radio 3', value: '3' }
          ]}
          onChange={(item: any) => setRadioValue(item.value)}
        />

        <RadioGroup
          orientation='row'
          value={radioValue}
          items={[
            { label: 'Row Radio 1', value: '4' },
            { label: 'Row Radio 2', value: '5' },
            { label: 'Row Radio 3', value: '6' }
          ]}
          onChange={(item: any) => setRadioValue(item.value)}
        />
      </View>
    </React.Fragment>
  );
};

export default RadioGroups;
