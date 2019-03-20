import palette from './palette';
export const defaultFontFamily = 'Open Sans';

export const buildVariant = (fontWeight, size, lineHeight, letterSpacing) => ({
    color: palette.text.primary,
    fontFamily: defaultFontFamily,
    fontSize: size,
    fontWeight: fontWeight,
    lineHeight: lineHeight,
    letterSpacing: letterSpacing,
  });


export default {
    buildVariant,
    defaultFontFamily,
};
