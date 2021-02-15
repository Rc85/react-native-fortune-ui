import React from 'react';
import { Text, colors } from 'react-native-fortune-ui';
import { View } from 'react-native';
import { styles } from '../styles';

export const Typography = () => {
  return (
    <React.Fragment>
      <Text heading note>
        TYPOGRAPHY
      </Text>

      <View style={[styles.mb15]}>
        <Text heading={1}>Heading 1</Text>
        <Text heading={2}>Heading 2</Text>
        <Text heading={3}>Heading 3</Text>
        <Text heading note>
          Note Heading
        </Text>
        <Text large>Large Text</Text>
        <Text bold>Bold</Text>
        <Text underlined>Underlined</Text>
        <Text striked>Striked</Text>
        <Text underlined striked>
          Underlined Striked
        </Text>
        <Text emphasized>Emphasized</Text>
        <Text>Normal</Text>
        <Text color={colors.red}>Colored Red</Text>
        <Text capitalized>capitalize</Text>
        <Text uppercase>uppercase</Text>
        <Text list>List Item</Text>
        <Text note>Note</Text>
      </View>
    </React.Fragment>
  );
};

export default Typography;
