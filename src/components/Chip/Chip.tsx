import React from 'react';
import { View, ViewStyle } from 'react-native';
import Text from '../../components/Text/Text';
import { colors } from '../../constants';

interface Props {
  label: string;
  type?: 'success' | 'warning' | 'error' | 'info' | 'light';
  style?: object;
  badgeContent?: string;
  badgeStyle?: object;
  badgePosition?: string;
}

interface TypeProp {
  [key: string]: string;
}

interface BadgePosition {
  [key: string]: object;
}

export const Chip = (props: Props) => {
  const type: TypeProp = {
    success: colors.lightGreen,
    warning: colors.yellow,
    error: colors.red,
    info: colors.blue,
    light: colors.grey
  };
  const backgroundColor = props.type ? type[props.type] : colors.grey;
  const badgePosition: BadgePosition = {
    innerTop: { position: 'absolute', top: -7 },
    innerRight: { position: 'absolute', right: -7 },
    innerLeft: { position: 'absolute', left: -7 },
    innerBottom: { position: 'absolute', bottom: -5 },
    topLeft: { position: 'absolute', top: -5, left: -7 },
    topRight: { position: 'absolute', top: -5, right: -7 },
    bottomLeft: { position: 'absolute', bottom: -5, left: -7 },
    bottomRight: { position: 'absolute', bottom: -5, right: -5 }
  };
  const positionStyle = props.badgePosition
    ? badgePosition[props.badgePosition]
    : { position: 'absolute', right: -9 };

  const badgeStyle: ViewStyle = {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: colors.red,
    width: 15,
    height: 15,
    padding: 5,
    marginLeft: 0,
    ...positionStyle
  };

  const containerStyle: ViewStyle = {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    ...props.style
  };
  const labelContainerStyle: ViewStyle = {
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    backgroundColor
  };
  const labelStyle = { fontSize: 10 };
  const badgeTextStyle = { fontSize: 10 };

  return (
    <View style={containerStyle}>
      <View style={labelContainerStyle}>
        <Text bold color={colors.white} style={labelStyle}>
          {props.label}
        </Text>
      </View>

      {props.badgeContent && (
        <View style={badgeStyle}>
          <Text bold color={colors.white} style={badgeTextStyle}>
            {props.badgeContent}
          </Text>
        </View>
      )}
    </View>
  );
};

export default Chip;
