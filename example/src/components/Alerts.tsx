import React from 'react';
import { Text, Alert } from 'react-native-fortune-ui';
import { styles } from '../styles';

export const Alerts = () => {
  return (
    <React.Fragment>
      <Text heading note>
        ALERTS
      </Text>

      <Alert type='success' style={styles.mb5}>
        Success
      </Alert>
      <Alert type='error' style={styles.mb5}>
        Error
      </Alert>
      <Alert type='warning' style={styles.mb5}>
        Warning
      </Alert>
      <Alert type='info' style={styles.mb15}>
        Info
      </Alert>
    </React.Fragment>
  );
};

export default Alerts;
