import React from 'react';
import { Text, IconButton } from 'react-native-fortune-ui';
import { View } from 'react-native';
import { faCheck, faExclamation, faTimes } from '@fortawesome/free-solid-svg-icons';
import { styles } from '../styles';

export const IconButtons = () => {
  const containerStyle = { ...styles.flexRow, ...styles.mb15 };
  const buttonStyle = { ...styles.mb5, ...styles.mr5 };

  return (
    <React.Fragment>
      <Text heading note>
        ICON BUTTONS
      </Text>

      <View style={containerStyle}>
        <IconButton style={buttonStyle} icon={faCheck} type='success' onPress={() => {}} />
        <IconButton style={buttonStyle} icon={faTimes} type='error' rounded onPress={() => {}} />
        <IconButton
          style={buttonStyle}
          icon={faExclamation}
          type='warning'
          rounded
          small
          onPress={() => {}}
        />
      </View>
    </React.Fragment>
  );
};

export default IconButtons;
