import { buildVariant } from './createTypography';

export const fontWeight = {
    extraBold: 800,
    bold: 700,
    medium: 600,
    regular: 400,
    light: 300,
};

export const typography = {
    h1: buildVariant(fontWeight.extraBold, 72, 1.33, -2.5),
    h2: buildVariant(fontWeight.extraBold, 48, 1.33, -1),
    h3: buildVariant(fontWeight.extraBold, 32, 1.33, -1),
    h4: buildVariant(fontWeight.extraBold, 24, 1.33, -1),
    h5: buildVariant(fontWeight.extraBold, 20, 1.33, -0.7),
    h6: buildVariant(fontWeight.extraBold, 18, 1.33, -0.7),
    subtitle1: buildVariant(fontWeight.regular, 16, 1.75),
    subtitle2: buildVariant(fontWeight.regular, 14, 1.75),
    body1: buildVariant(fontWeight.regular, 15, 1.75),
    body2: buildVariant(fontWeight.regular, 13, 1.75),
    caption: buildVariant(fontWeight.regular, 12, 1.75, 0.3),
    overline: buildVariant(fontWeight.regular, 11, 1.75, 0.4),
};

export const button = buildVariant(fontWeight.bold, 14, 1.45, 0, 'uppercase');

export default {
    typography,
    button,
};
