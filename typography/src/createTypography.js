export const defaultFontFamily = 'Open Sans';

export const buildVariant = (fontWeight, size, lineHeight, letterSpacing, textTransform) => ({
    fontFamily: defaultFontFamily,
    fontSize: size,
    fontWeight: fontWeight,
    lineHeight: lineHeight * size,
    letterSpacing: letterSpacing,
    textTransform: textTransform,
});


export default {
    buildVariant,
    defaultFontFamily,
};
