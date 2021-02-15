import { StyleSheet } from 'react-native';
import { colors } from 'react-native-fortune-ui';

const generateMargins = () => {
  const margins: any = {};
  const marginBottoms: any = {};
  const marginTops: any = {};
  const marginRights: any = {};
  const marginLefts: any = {};

  for (let i = 1; i < 6; i++) {
    const key = i * 5;

    margins[`m${key}`] = { margin: i * 5 };
    marginBottoms[`mb${key}`] = { marginBottom: i * 5 };
    marginTops[`mt${key}`] = { marginTop: i * 5 };
    marginRights[`mr${key}`] = { marginRight: i * 5 };
    marginLefts[`ml${key}`] = { marginLeft: i * 5 };
  }

  return { ...margins, ...marginBottoms, ...marginTops, ...marginLefts, ...marginRights };
};

const generatePaddings = () => {
  const paddings: any = {};
  const paddingBottoms: any = {};
  const paddingTops: any = {};
  const paddingRights: any = {};
  const paddingLefts: any = {};

  for (let i = 1; i < 6; i++) {
    const key = i * 5;

    paddings[`p${key}`] = { padding: i * 5 };
    paddingBottoms[`pb${key}`] = { paddingBottom: i * 5 };
    paddingTops[`pt${key}`] = { paddingTop: i * 5 };
    paddingRights[`pr${key}`] = { paddingRight: i * 5 };
    paddingLefts[`pl${key}`] = { paddingLeft: i * 5 };
  }

  return { ...paddings, ...paddingBottoms, ...paddingTops, ...paddingLefts, ...paddingRights };
};

export const styles = StyleSheet.create({
  ...generateMargins(),
  ...generatePaddings(),
  fontSizeXs: {
    fontSize: 10
  },
  fontSizeSm: {
    fontSize: 12
  },
  posRelative: {
    position: 'relative'
  },
  posAbsolute: {
    position: 'absolute'
  },
  flex: {
    flex: 1
  },
  flexRow: {
    flexDirection: 'row'
  },
  flexJustifyEnd: {
    justifyContent: 'flex-end'
  },
  flexJustifyCenter: {
    justifyContent: 'center'
  },
  alignItemsStart: {
    alignItems: 'flex-start'
  },
  alignItemsCenter: {
    alignItems: 'center'
  },
  flexWrap: {
    flexWrap: 'wrap'
  },
  bgWhite: {
    backgroundColor: colors.white
  },
  bgFadedGrey: {
    backgroundColor: colors.fadedGrey
  },
  bgBlue: {
    backgroundColor: colors.blue
  },
  bgRed: {
    backgroundColor: colors.red
  },
  bgLightGrey: {
    backgroundColor: colors.lightGrey
  },
  w20: {
    width: 20
  },
  w125: {
    width: 125
  },
  h5: {
    height: 5
  },
  h20: {
    height: 20
  },
  wFull: {
    width: '100%'
  },
  hFull: {
    height: '100%'
  },
  shrinkFull: {
    flexShrink: 1
  },
  growFull: {
    flexGrow: 1
  },
  fontColorGrey: {
    color: colors.grey
  },
  br100: {
    borderRadius: 100
  },
  borderColorGrey: {
    borderColor: colors.grey
  },
  borderWidth1: {
    borderWidth: 1
  },
  borderSolid: {
    borderStyle: 'solid'
  }
});
