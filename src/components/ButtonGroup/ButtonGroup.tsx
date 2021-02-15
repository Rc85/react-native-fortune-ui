import React, { ReactElement } from 'react';
import { ScrollView, ViewStyle } from 'react-native';
import { colors } from '../../constants';

interface Props {
  type?: 'success' | 'error' | 'info' | 'warning';
  orientation?: 'row' | 'column';
  children: Array<ReactElement>;
  small?: boolean;
  outlined?: boolean;
  disabled?: boolean;
  style?: object;
}

export const ButtonGroup = (props: Props) => {
  let containerStyle: ViewStyle = {};

  if (props.orientation === 'row') {
    containerStyle.flexDirection = 'row';
  } else {
    containerStyle.alignItems = 'flex-start';
  }

  const renderReactChild = (child: ReactElement, i: number) => {
    const clonedProps = {
      ...child.props,
      type: props.type,
      small: props.small,
      outlined: props.outlined,
      disabled: props.disabled
    };

    if (!child.props.style) {
      clonedProps.style = {};
    }

    clonedProps.style.borderRadius = 0;
    clonedProps.style.borderStyle = 'solid';

    if (props.orientation === 'row') {
      if (i === 0) {
        clonedProps.style.borderTopLeftRadius = 3;
        clonedProps.style.borderBottomLeftRadius = 3;
      } else if (i + 1 === props.children.length) {
        clonedProps.style.borderTopRightRadius = 3;
        clonedProps.style.borderBottomRightRadius = 3;
      }

      if (!props.outlined) {
        if (i + 1 !== props.children.length) {
          clonedProps.style.borderRightWidth = 1;
          clonedProps.style.borderRightColor = colors.darkGrey;

          if (props.type === 'success') {
            clonedProps.style.borderRightColor = colors.darkGreen;
          } else if (props.type === 'error') {
            clonedProps.style.borderRightColor = colors.darkRed;
          } else if (props.type === 'info') {
            clonedProps.style.borderRightColor = colors.darkTurquoise;
          } else if (props.type === 'warning') {
            clonedProps.style.borderRightColor = colors.darkOrange;
          }

          if (props.disabled) {
            clonedProps.style.borderRightColor = colors.grey;
          }
        }
      } else {
        if (i + 1 !== props.children.length) {
          clonedProps.style.borderRightWidth = 0;
          clonedProps.style.borderRightColor = undefined;
        }
      }
    } else {
      if (i === 0) {
        clonedProps.style.borderTopLeftRadius = 3;
        clonedProps.style.borderTopRightRadius = 3;
      } else if (i + 1 === props.children.length) {
        clonedProps.style.borderBottomLeftRadius = 3;
        clonedProps.style.borderBottomRightRadius = 3;
      }

      if (!props.outlined) {
        if (i + 1 !== props.children.length) {
          clonedProps.style.borderBottomWidth = 1;
          clonedProps.style.borderBottomColor = colors.darkGrey;

          if (props.type === 'success') {
            clonedProps.style.borderBottomColor = colors.darkGreen;
          } else if (props.type === 'error') {
            clonedProps.style.borderBottomColor = colors.darkRed;
          } else if (props.type === 'info') {
            clonedProps.style.borderBottomColor = colors.darkTurquoise;
          } else if (props.type === 'warning') {
            clonedProps.style.borderBottomColor = colors.darkOrange;
          }

          if (props.disabled) {
            clonedProps.style.borderBottomColor = colors.grey;
          }
        }
      } else {
        if (i + 1 !== props.children.length) {
          clonedProps.style.borderBottomWidth = 0;
          clonedProps.style.borderBottomColor = undefined;
        }
      }
    }

    return React.cloneElement(child, { ...clonedProps });
  };

  containerStyle = { ...containerStyle, ...props.style };

  return (
    <ScrollView
      horizontal={props.orientation === 'row'}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={containerStyle}
    >
      {React.Children.map(props.children, (child, i) => renderReactChild(child, i))}
    </ScrollView>
  );
};

export default ButtonGroup;
