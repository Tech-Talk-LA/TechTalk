import { StyleSheet } from 'react-native';

// VARIABLES

// COLORS
const colorBackground = '#efefef';
const colorBlack = '#333';
const colorWhite = '#fff';
const colorGray = '#555';
const colorBlue = '#036bfc';

// FONT SIZE
const fontSize_1 = 12;
const fontSize_2 = 16;
const fontSize_3 = 20;
const fontSize_4 = 24;
const fontSize_5 = 28;
const fontSize_6 = 32;
const fontSize_7 = 36;

// MARGINS
const margin_1 = 8;
const margin_2 = 16;
const margin_3 = 24;
const margin_4 = 35;
const margin_5 = 40;
const margin_6 = 48;

// PADDING
const padding_1 = 5;
const padding_2 = 10;
const padding_3 = 15;
const padding_4 = 20;

// BORDER RADIUS
const borderRadius = 5;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorBackground,
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1: {
    margin: margin_5,
    fontSize: fontSize_7,
    color: colorBlack,
  },
  h2: {
    marginBottom: margin_6,
    fontSize: fontSize_5,
    fontWeight: '700',
    color: colorBlack,
  },
  text: {
    color: colorBlack,
    fontWeight: '600',
  },
  textInput: {
    height: 40,
    padding: padding_1,
    borderColor: colorGray,
    borderWidth: 1,
    width: 200,
    marginBottom: margin_1,
    fontWeight: '600',
    borderRadius,
  },
  inputLabel: {
    marginBottom: margin_1,
  },
  loginButton: {
    width: 80,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: margin_5,
    backgroundColor: colorBlue,
    padding: padding_2,
    borderRadius,
  },
  submitButton: {
    backgroundColor: colorBlue,
  },
  submitText: {
    color: colorWhite,
    fontWeight: '700',
    fontSize: fontSize_2,
  },
  loginButtonText: {
    color: colorWhite,
    fontWeight: '600',
    fontSize: fontSize_2,
  },
  feedbox: {
    borderWidth: 1,
    borderColor: colorGray,
    backgroundColor: colorBlack,
    padding: padding_3,
    paddingTop: padding_2,
    marginBottom: margin_1,
    borderRadius,
    width: 280,
  },
  feedItem: {
    color: colorWhite,
    fontSize: fontSize_2,
    fontWeight: '600',
  },
  feedItemName: {
    textAlign: 'center',
    color: colorWhite,
    fontWeight: '700',
    fontSize: fontSize_3,
  },
  feedItemDesc: {
    textAlign: 'center',
    color: colorWhite,
    fontWeight: '600',
    marginBottom: margin_2,
    fontSize: fontSize_2,
  },
});

export default styles;
