import React from 'react';
import { colors, Text } from 'react-native-fortune-ui';
import { View } from 'react-native';
import { styles } from '../styles';

export const Colors = () => {
  return (
    <React.Fragment>
      <Text heading note>
        COLORS
      </Text>

      <View style={[styles.flexRow, styles.flexWrap, styles.mb15]}>
        {Object.keys(colors).map((key: string) => {
          const bgStyle = { backgroundColor: colors[key] };

          return <View key={key} style={[styles.w20, styles.h20, styles.mr5, styles.mb5, bgStyle]} />;
        })}
      </View>
    </React.Fragment>
  );
};

export default Colors;
