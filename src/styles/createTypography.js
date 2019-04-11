import { shadesOfGrey } from '../colors';

const defaultFontFamily = 'Open Sans';

export const buildVariant = (
    fontWeight,
    size,
    lineHeight,
    letterSpacing,
    textTransform
) => ({
    color: shadesOfGrey.dark,
    fontFamily: defaultFontFamily,
    fontSize: size,
    fontWeight: fontWeight,
    lineHeight: lineHeight,
    letterSpacing: letterSpacing,
    textTransform: textTransform,
});

export const fontWeight = {
    extraBold: 800,
    bold: 700,
    medium: 600,
    regular: 400,
    light: 300,
};

export const typography = {
    h1: buildVariant(fontWeight.extraBold, 72, 84, -2.5),
    h2: buildVariant(fontWeight.extraBold, 48, 56, -1),
    h3: buildVariant(fontWeight.extraBold, 32, 40, -1),
    h4: buildVariant(fontWeight.extraBold, 24, 32, -1),
    h5: buildVariant(fontWeight.extraBold, 20, 29, -0.7),
    h6: buildVariant(fontWeight.extraBold, 18, 24, -0.7),
    subtitle1: buildVariant(fontWeight.regular, 16, 30),
    subtitle2: buildVariant(fontWeight.regular, 14, 27),
    body1: buildVariant(fontWeight.regular, 15, 30),
    body2: buildVariant(fontWeight.regular, 13, 23),
    caption: buildVariant(fontWeight.regular, 12, 22, 0.3),
    overline: buildVariant(fontWeight.regular, 11, 15, 0.4),
};

export const button = buildVariant(fontWeight.bold, 14, 24, 0, 'uppercase');

export default {
    typography,
    button,
};
