import React, { useContext, useState } from 'react';
import type { LayoutChangeEvent } from 'react-native';
import type { ImageStyle } from 'react-native';
import type { StyleProp } from 'react-native';
import type { ViewStyle } from 'react-native';
import { View, ImageBackground } from 'react-native';
import { themes } from '../../themes';
import { ThemeContext } from '../../context/ThemeContext';

interface Props {
  cardImageSource?: any;
  children: any;
  cardContentStyle?: object;
  containerStyle?: object;
  imageStyle?: object;
  imageWidth?: number | string;
  imageHeight?: number | string;
  elevation?: number;
  icon?: any;
  iconPosition?:
    | 'top'
    | 'top right'
    | 'right'
    | 'bottom right'
    | 'bottom'
    | 'bottom left'
    | 'left'
    | 'top left'
    | 'center';
  iconStyle?: object;
  iconBackgroundColor?: string;
  iconOffset?: { x: number; y: number };
  cardImagePosition?: 'top' | 'left' | 'right' | 'bottom';
  rounded?: boolean;
  roundIcon?: boolean;
}

export const Card = (props: Props) => {
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [iconSize, setIconSize] = useState({ width: 0, height: 0 });
  const cardImagePosition = props.cardImageSource && (props.cardImagePosition || 'top');
  const { themeName } = useContext(ThemeContext);

  const containerStyle: ViewStyle = {
    flexDirection: 'row',
    ...props.containerStyle
  };

  const cardContentStyle: ViewStyle = props.cardContentStyle || {
    backgroundColor: themes[themeName].foreground,
    elevation: props.elevation || 0,
    padding: 10
  };

  if (props.cardImageSource) {
    if (cardImagePosition === 'top') {
      cardContentStyle.borderBottomRightRadius = props.rounded ? 5 : 0;
      cardContentStyle.borderBottomLeftRadius = props.rounded ? 5 : 0;
    } else if (cardImagePosition === 'left') {
      cardContentStyle.borderTopRightRadius = props.rounded ? 5 : 0;
      cardContentStyle.borderBottomRightRadius = props.rounded ? 5 : 0;
    } else if (cardImagePosition === 'right') {
      cardContentStyle.borderTopLeftRadius = props.rounded ? 5 : 0;
      cardContentStyle.borderBottomLeftRadius = props.rounded ? 5 : 0;
    } else if (cardImagePosition === 'bottom') {
      cardContentStyle.borderTopRightRadius = props.rounded ? 5 : 0;
      cardContentStyle.borderTopLeftRadius = props.rounded ? 5 : 0;
    }
  } else {
    cardContentStyle.borderRadius = props.rounded ? 5 : 0;
  }

  const imageContainerStyle = { width: props.imageWidth || '100%', height: props.imageHeight || 80 };

  let imageStyle: StyleProp<ImageStyle> = {
    borderTopRightRadius: props.rounded ? 5 : 0,
    borderTopLeftRadius: props.rounded ? 5 : 0
  };

  if (cardImagePosition && ['left', 'right'].includes(cardImagePosition)) {
    imageContainerStyle.width = props.imageWidth || 80;
    imageContainerStyle.height = props.imageHeight || '100%';
  }

  if (cardImagePosition === 'left') {
    imageStyle = {
      borderTopLeftRadius: props.rounded ? 5 : 0,
      borderBottomLeftRadius: props.rounded ? 5 : 0
    };
  }

  if (cardImagePosition === 'right') {
    imageStyle = {
      borderTopRightRadius: props.rounded ? 5 : 0,
      borderBottomRightRadius: props.rounded ? 5 : 0
    };
  }

  if (cardImagePosition === 'bottom') {
    imageStyle = {
      borderBottomLeftRadius: props.rounded ? 5 : 0,
      borderBottomRightRadius: props.rounded ? 5 : 0
    };
  }

  imageStyle = { ...imageStyle, ...props.imageStyle };

  const imageSource =
    typeof props.cardImageSource === 'string' ? { uri: props.cardImageSource } : props.cardImageSource;

  const iconStyle: ViewStyle = {
    position: 'absolute',
    backgroundColor: props.iconBackgroundColor || 'transparent',
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    ...props.iconStyle
  };

  const iconPosition = props.iconPosition || 'top left';

  if (iconPosition === 'top right') {
    iconStyle.right = 10;
    iconStyle.top = 10;

    if (props.iconOffset) {
      const top =
        typeof iconStyle.top === 'string'
          ? parseInt(iconStyle.top)
          : typeof iconStyle.top === 'number'
          ? iconStyle.top
          : 0;
      const right =
        typeof iconStyle.right === 'string'
          ? parseInt(iconStyle.right)
          : typeof iconStyle.right === 'number'
          ? iconStyle.right
          : 0;

      iconStyle.top = top + props.iconOffset.y;
      iconStyle.right = right + props.iconOffset.x;
    }
  } else if (iconPosition === 'top') {
    iconStyle.top = 10;
    iconStyle.left = containerSize.width / 2 - iconSize.width / 2;

    if (props.iconOffset) {
      const top =
        typeof iconStyle.top === 'string'
          ? parseInt(iconStyle.top)
          : typeof iconStyle.top === 'number'
          ? iconStyle.top
          : 0;
      const left =
        typeof iconStyle.left === 'string'
          ? parseInt(iconStyle.left)
          : typeof iconStyle.left === 'number'
          ? iconStyle.left
          : 0;

      iconStyle.top = top + props.iconOffset.y;
      iconStyle.left = left + props.iconOffset.x;
    }
  } else if (iconPosition === 'top left') {
    iconStyle.left = 10;
    iconStyle.top = 10;

    if (props.iconOffset) {
      const top =
        typeof iconStyle.top === 'string'
          ? parseInt(iconStyle.top)
          : typeof iconStyle.top === 'number'
          ? iconStyle.top
          : 0;
      const left =
        typeof iconStyle.left === 'string'
          ? parseInt(iconStyle.left)
          : typeof iconStyle.left === 'number'
          ? iconStyle.left
          : 0;

      iconStyle.top = top + props.iconOffset.y;
      iconStyle.left = left + props.iconOffset.x;
    }
  } else if (iconPosition === 'bottom left') {
    iconStyle.left = 10;
    iconStyle.bottom = 10;

    if (props.iconOffset) {
      const bottom =
        typeof iconStyle.bottom === 'string'
          ? parseInt(iconStyle.bottom)
          : typeof iconStyle.bottom === 'number'
          ? iconStyle.bottom
          : 0;
      const left =
        typeof iconStyle.left === 'string'
          ? parseInt(iconStyle.left)
          : typeof iconStyle.left === 'number'
          ? iconStyle.left
          : 0;

      iconStyle.bottom = bottom + props.iconOffset.y;
      iconStyle.left = left + props.iconOffset.x;
    }
  } else if (iconPosition === 'bottom right') {
    iconStyle.right = 10;
    iconStyle.bottom = 10;

    if (props.iconOffset) {
      const bottom =
        typeof iconStyle.bottom === 'string'
          ? parseInt(iconStyle.bottom)
          : typeof iconStyle.bottom === 'number'
          ? iconStyle.bottom
          : 0;
      const right =
        typeof iconStyle.right === 'string'
          ? parseInt(iconStyle.right)
          : typeof iconStyle.right === 'number'
          ? iconStyle.right
          : 0;

      iconStyle.bottom = bottom + props.iconOffset.y;
      iconStyle.right = right + props.iconOffset.x;
    }
  } else if (iconPosition === 'bottom') {
    iconStyle.bottom = 10;
    iconStyle.left = containerSize.width / 2 - iconSize.width / 2;

    if (props.iconOffset) {
      const bottom =
        typeof iconStyle.bottom === 'string'
          ? parseInt(iconStyle.bottom)
          : typeof iconStyle.bottom === 'number'
          ? iconStyle.bottom
          : 0;
      const left =
        typeof iconStyle.left === 'string'
          ? parseInt(iconStyle.left)
          : typeof iconStyle.left === 'number'
          ? iconStyle.left
          : 0;

      iconStyle.bottom = bottom + props.iconOffset.y;
      iconStyle.left = left + props.iconOffset.x;
    }
  } else if (iconPosition === 'left') {
    iconStyle.top = containerSize.height / 2 - iconSize.height / 2;
    iconStyle.left = 10;

    if (props.iconOffset) {
      const top =
        typeof iconStyle.top === 'string'
          ? parseInt(iconStyle.top)
          : typeof iconStyle.top === 'number'
          ? iconStyle.top
          : 0;
      const left =
        typeof iconStyle.left === 'string'
          ? parseInt(iconStyle.left)
          : typeof iconStyle.left === 'number'
          ? iconStyle.left
          : 0;

      iconStyle.top = top + props.iconOffset.y;
      iconStyle.left = left + props.iconOffset.x;
    }
  } else if (iconPosition === 'right') {
    iconStyle.top = containerSize.height / 2 - iconSize.height / 2;
    iconStyle.right = 10;

    if (props.iconOffset) {
      const top =
        typeof iconStyle.top === 'string'
          ? parseInt(iconStyle.top)
          : typeof iconStyle.top === 'number'
          ? iconStyle.top
          : 0;
      const right =
        typeof iconStyle.right === 'string'
          ? parseInt(iconStyle.right)
          : typeof iconStyle.right === 'number'
          ? iconStyle.right
          : 0;

      iconStyle.top = top + props.iconOffset.y;
      iconStyle.right = right + props.iconOffset.x;
    }
  }

  if (props.roundIcon) {
    iconStyle.borderRadius = 100;
  }

  const bodyContainer = { flexGrow: 1 };

  const handleOnLayout = (e: LayoutChangeEvent) => {
    setContainerSize({ width: e.nativeEvent.layout.width, height: e.nativeEvent.layout.height });
  };

  const handleIconLayout = (e: LayoutChangeEvent) => {
    setIconSize({ width: e.nativeEvent.layout.width, height: e.nativeEvent.layout.height });
  };

  return (
    <View style={[containerStyle]} onLayout={handleOnLayout}>
      {cardImagePosition === 'left' && props.cardImageSource && (
        <ImageBackground source={imageSource} style={imageContainerStyle} imageStyle={[imageStyle]} />
      )}

      <View style={[bodyContainer]}>
        {cardImagePosition === 'top' && props.cardImageSource && (
          <ImageBackground source={imageSource} style={imageContainerStyle} imageStyle={[imageStyle]} />
        )}

        <View style={[cardContentStyle]}>{props.children}</View>

        {cardImagePosition === 'bottom' && props.cardImageSource && (
          <ImageBackground source={imageSource} style={imageContainerStyle} imageStyle={[imageStyle]} />
        )}

        {props.icon && (
          <View onLayout={handleIconLayout} style={[iconStyle]}>
            {props.icon}
          </View>
        )}
      </View>

      {cardImagePosition === 'right' && props.cardImageSource && (
        <ImageBackground source={imageSource} style={imageContainerStyle} imageStyle={[imageStyle]} />
      )}
    </View>
  );
};

export default Card;
