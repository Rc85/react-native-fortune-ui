import React, { useContext } from 'react';
import { Text, Button, ThemeContext } from 'react-native-fortune-ui';
import { View } from 'react-native';
import { styles } from '../styles';

export const Buttons = () => {
  const containerStyle = { ...styles.flexRow, ...styles.flexWrap, ...styles.alignItemsStart, ...styles.mb15 };
  const buttonStyle = { ...styles.mr5, ...styles.mb5 };
  const themeContext = useContext(ThemeContext);

  return (
    <React.Fragment>
      <Text heading note>
        BUTTONS
      </Text>

      <View style={containerStyle}>
        <Button style={buttonStyle} onPress={themeContext.toggle}>
          Default
        </Button>
        <Button outlined type='success' style={buttonStyle}>
          Outlined
        </Button>
        <Button rounded type='error' style={buttonStyle}>
          Rounded
        </Button>
        <Button type='info' style={buttonStyle}>
          Info
        </Button>
        <Button small type='warning' style={buttonStyle}>
          Small
        </Button>
        <Button outlined disabled style={buttonStyle}>
          Disabled
        </Button>
        <Button disabled style={buttonStyle}>
          Disabled
        </Button>
      </View>
    </React.Fragment>
  );
};

export default Buttons;
