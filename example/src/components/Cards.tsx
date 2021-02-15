import React from 'react';
import { faStore } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { View } from 'react-native';
import { Text, Card, colors } from 'react-native-fortune-ui';
import { styles } from '../styles';
import { ImageBackground } from 'react-native';

export const Cards = () => {
  return (
    <View style={[styles.mb15, styles.p5]}>
      <Text heading note capitalized>
        Cards
      </Text>

      <Card containerStyle={styles.mb15}>
        <Text heading={1}>Square card</Text>
      </Card>

      <Card containerStyle={styles.mb15} elevation={24}>
        <Text heading={1}>Card With Shadow</Text>
      </Card>

      <Card
        rounded
        containerStyle={styles.mb15}
        icon={<FontAwesomeIcon icon={faStore} color={colors.white} />}
        iconBackgroundColor={colors.red}
        iconPosition='top right'
        roundIcon
      >
        <Text heading={1}>Rounded card</Text>
      </Card>

      <Card
        rounded
        containerStyle={styles.mb15}
        cardImageSource={require('../images/asian.jpg')}
        icon={
          <ImageBackground
            source={require('../images/sample-logo1.png')}
            style={{ width: 70, height: 70 }}
            imageStyle={{ borderRadius: 100 }}
          />
        }
        iconPosition='right'
        iconOffset={{ x: 20, y: 0 }}
      >
        <Text heading={2}>Image Card</Text>
        <Text>Image on top and an icon</Text>
      </Card>

      <Card
        rounded
        containerStyle={styles.mb15}
        cardImageSource={require('../images/asian.jpg')}
        cardImagePosition='right'
      >
        <Text heading={2}>Image Card</Text>
        <Text>Image on the right</Text>
      </Card>

      <Card
        rounded
        containerStyle={styles.mb15}
        cardImageSource={require('../images/asian.jpg')}
        cardImagePosition='left'
      >
        <Text heading={2}>Image Card</Text>
        <Text>Image on the left</Text>
      </Card>

      <Card
        rounded
        containerStyle={styles.mb15}
        cardImageSource={require('../images/asian.jpg')}
        cardImagePosition='bottom'
      >
        <Text heading={2}>Image Card</Text>
        <Text>Image at the bottom</Text>
      </Card>
    </View>
  );
};

export default Cards;
