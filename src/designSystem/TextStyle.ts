import {Typography} from 'react-native-ui-lib';

const fonts = {
  regular: 'Roboto-Regular',
  bold: 'Roboto-Bold',
  medium: 'Roboto-Medium',
};

Typography.loadTypographies({
  //Title
  title1b: {fontSize: 48, fontFamily: fonts.bold},
  title2b: {fontSize: 36, fontFamily: fonts.bold},
  title3b: {fontSize: 28, fontFamily: fonts.bold},
  title3m: {fontSize: 28, fontFamily: fonts.medium},
  title4r: {fontSize: 28, fontFamily: fonts.regular},
  title5b: {fontSize: 22, fontFamily: fonts.bold},

  r12: {fontSize: 12, fontFamily: fonts.regular},
  b12: {fontSize: 12, fontFamily: fonts.bold},

  r14: {fontSize: 14, fontFamily: fonts.regular},
  b14: {fontSize: 14, fontFamily: fonts.bold},

  b16: {fontSize: 16, fontFamily: fonts.bold},
  r16: {fontSize: 16, fontFamily: fonts.regular},

  b11: {fontSize: 11, fontFamily: fonts.bold},
});
