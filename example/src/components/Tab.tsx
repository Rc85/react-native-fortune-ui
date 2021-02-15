import React from 'react';
import { Tabs, Text } from 'react-native-fortune-ui';
import { View } from 'react-native';
import { styles } from '../styles';

export const Tab = () => {
  return (
    <React.Fragment>
      <Text heading note>
        TABS
      </Text>

      <View style={[styles.mb15]}>
        <Tabs.Container>
          <Tabs.Tab heading='Home'>
            <Text>Home</Text>
          </Tabs.Tab>

          <Tabs.Tab heading='Profile'>
            <Text>Profile</Text>
          </Tabs.Tab>

          <Tabs.Tab heading='Settings'>
            <Text>Settings</Text>
          </Tabs.Tab>
        </Tabs.Container>
      </View>
    </React.Fragment>
  );
};

export default Tab;
