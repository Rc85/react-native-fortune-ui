import React from 'react';
import { ButtonGroup, Button, Text } from 'react-native-fortune-ui';
import { styles } from '../styles';

export const ButtonGroups = () => {
  return (
    <React.Fragment>
      <Text heading note>
        BUTTON GROUP
      </Text>

      <ButtonGroup orientation='row' style={styles.mb5}>
        <Button>Default 1</Button>
        <Button>Default 2</Button>
        <Button>Default 3</Button>
      </ButtonGroup>

      <ButtonGroup type='success' orientation='row' style={styles.mb5}>
        <Button>Success 1</Button>
        <Button>Success 2</Button>
        <Button>Success 3</Button>
      </ButtonGroup>

      <ButtonGroup type='error' orientation='row' style={styles.mb5}>
        <Button>Error 1</Button>
        <Button>Error 2</Button>
        <Button>Error 3</Button>
      </ButtonGroup>

      <ButtonGroup type='warning' orientation='row' style={styles.mb5}>
        <Button>Warning 1</Button>
        <Button>Warning 2</Button>
        <Button>Warning 3</Button>
      </ButtonGroup>

      <ButtonGroup type='info' orientation='row' style={styles.mb5}>
        <Button>Info 1</Button>
        <Button>Info 2</Button>
        <Button>Info 3</Button>
      </ButtonGroup>

      <ButtonGroup type='info' disabled orientation='row' style={styles.mb5}>
        <Button>Disabled 1</Button>
        <Button>Disabled 2</Button>
        <Button>Disabled 3</Button>
      </ButtonGroup>

      <ButtonGroup type='error' outlined orientation='row' style={styles.mb5}>
        <Button>Outlined 1</Button>
        <Button>Outlined 2</Button>
        <Button>Outlined 3</Button>
      </ButtonGroup>

      <ButtonGroup type='error' outlined small orientation='row' style={styles.mb5}>
        <Button>Small 1</Button>
        <Button>Small 2</Button>
        <Button>Small 3</Button>
      </ButtonGroup>

      <ButtonGroup type='error' disabled outlined orientation='row' style={styles.mb5}>
        <Button>Disabled Outlined 1</Button>
        <Button>Disabled Outlined 2</Button>
        <Button>Disabled Outlined 3</Button>
      </ButtonGroup>

      <ButtonGroup type='success' outlined style={styles.mb15}>
        <Button>Column 1</Button>
        <Button>Column 2</Button>
        <Button>Column 3</Button>
      </ButtonGroup>
    </React.Fragment>
  );
};

export default ButtonGroups;
