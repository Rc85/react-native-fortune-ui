import React from 'react';
import { Text, Chip } from 'react-native-fortune-ui';
import { View } from 'react-native';
import { styles } from '../styles';

export const Chips = () => {
  const containerStyle = { ...styles.flexRow, ...styles.flexWrap };
  const chipStyle = { ...styles.mr15, ...styles.mb10 };

  return (
    <React.Fragment>
      <Text heading note uppercase>
        Chip
      </Text>

      <View style={containerStyle}>
        <Chip label='Success' type='success' style={chipStyle} />
        <Chip label='Error' type='error' style={chipStyle} />
        <Chip label='Warning' type='warning' style={chipStyle} />
        <Chip label='Info' type='info' style={chipStyle} />
        <Chip label='Default' style={chipStyle} />
        <Chip label='Default Positioned Badge' style={chipStyle} badgeContent='1' badgePosition='topRight' />
        <Chip label='Default Badge' style={chipStyle} badgeContent='1' />
      </View>
    </React.Fragment>
  );
};

export default Chips;
