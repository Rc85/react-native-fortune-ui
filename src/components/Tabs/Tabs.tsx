import React, { useRef, useState } from 'react';
import type { ViewStyle } from 'react-native';
import { Animated, Dimensions, Pressable, ScrollView, View } from 'react-native';
import Text from '../Text/Text';
import { colors } from '../../constants';

interface TabProps {
  heading: string;
  children: any;
}

interface Props {
  headingBackgroundColor?: string;
  activeHeadingBackgroundColor?: string;
  activeHeadingTextColor?: string;
  inactiveHeadingTextColor?: string;
  children: any;
}

export const Container = (props: Props) => {
  const [currentTab, setCurrentTab] = useState(0);
  const screenWidth = Dimensions.get('window').width;
  const tabsContainer = useRef();
  const tabContainer = useRef();
  const tabsWidths: Array<number> = [];
  const indicatorPosition = useRef(new Animated.Value(0)).current;

  const handleTabPress = (index: number) => {
    //@ts-ignore
    tabsContainer.current?.scrollTo({
      x: index * 125 - 125,
      y: 0,
      animated: true
    });

    //@ts-ignore
    tabContainer.current?.scrollTo({
      x: index * screenWidth,
      y: 0,
      animated: true
    });

    setCurrentTab(index);

    Animated.timing(indicatorPosition, {
      toValue: index * 125,
      duration: 250,
      useNativeDriver: false
    }).start();
  };

  const renderHeadingStyle = (index: number) => {
    const style: ViewStyle = {
      backgroundColor: props.headingBackgroundColor || colors.lightGrey
    };

    if (index === currentTab) {
      style.backgroundColor = props.activeHeadingBackgroundColor || colors.lightGrey;
    }

    return style;
  };

  const indicatorStyle: Animated.WithAnimatedObject<ViewStyle> = {
    width: 125,
    height: 5,
    backgroundColor: colors.red,
    position: 'absolute',
    bottom: 0,
    left: indicatorPosition
  };
  const contentContainerStyle = { width: screenWidth, minHeight: 200 };
  const tabsContainerStyle: ViewStyle = { position: 'relative' };
  const tabsContentContainerStyle: ViewStyle = { flexDirection: 'row' };

  return (
    <View>
      <View>
        <ScrollView
          horizontal
          contentContainerStyle={tabsContentContainerStyle}
          style={tabsContainerStyle}
          showsHorizontalScrollIndicator={false}
          //@ts-ignore
          ref={tabsContainer}
        >
          {props.children.map((tab: any, i: number) => {
            let clonedHeading;

            if (typeof tab.props.heading !== 'string') {
              clonedHeading = React.cloneElement(tab.props.heading, {
                color:
                  i === currentTab
                    ? props.activeHeadingTextColor || colors.black
                    : props.inactiveHeadingTextColor || colors.grey
              });
            }

            const tabStyle: ViewStyle = {
              padding: 10,
              paddingBottom: 15,
              justifyContent: 'center',
              alignItems: 'center',
              width: 125,
              ...renderHeadingStyle(i)
            };

            return (
              <Pressable
                key={i}
                style={tabStyle}
                onLayout={(e) => tabsWidths.push(e.nativeEvent.layout.width)}
                onPress={() => handleTabPress(i)}
              >
                {typeof tab.props.heading === 'string' ? (
                  <Text
                    numberOfLines={1}
                    color={
                      i === currentTab
                        ? props.activeHeadingTextColor || colors.black
                        : props.inactiveHeadingTextColor || colors.grey
                    }
                  >
                    {tab.props.heading}
                  </Text>
                ) : clonedHeading ? (
                  clonedHeading
                ) : null}
              </Pressable>
            );
          })}

          <Animated.View style={indicatorStyle} />
        </ScrollView>

        <ScrollView
          horizontal
          contentContainerStyle={tabsContentContainerStyle}
          showsHorizontalScrollIndicator={false}
          //@ts-ignore
          ref={tabContainer}
        >
          {props.children.map((tab: any, i: number) => (
            <View key={i} style={contentContainerStyle}>
              {tab.props.children}
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const Tab = (props: TabProps) => {
  return <View>{props.heading}</View>;
};

export default {
  Container,
  Tab
};
