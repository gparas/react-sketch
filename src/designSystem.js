export const colors = {
    Brand: '#173d9a',
    Primary: '#00aeff',
    Secondary: '#00C5C7',
    Marketing: '#02cfa5',
    Success: '#09B777',
    Error: '#F74773',
    Warning: '#FF8001',
    Info: '#060847',
    Black: '#3E3F42',
    Grey: '#dddddd',
    LightGrey: '#eeeeee',
    White: '#ffffff',
};

export const spacing = 8;

export const gutter = spacing * 2;

export const typeSizes = [12, 14, 16, 18, 21, 24, 36, 48, 60];

export const fontFamily = 'Roboto';

export const fontWeights = {
    Medium: 500,
    Regular: 400,
    Light: 300,
  };

export const typography = {
    Title: {
        fontFamily,
        fontSize: typeSizes[4],
        fontWeight: fontWeights.Medium,
        color: colors.Black,
    },
    Caption: {
        fontFamily,
        fontSize: typeSizes[0],
        fontWeight: fontWeights.Regular,
        color: colors.Black,
        opacity: .75,
    },
    Button: {
        fontFamily,
        fontSize: typeSizes[1],
        textAlign: 'center',
        fontWeight: 'bold',
        lineHeight: 24,
    },
    Body: {
        fontFamily,
        fontSize: typeSizes[1],
        color: colors.Black,
    }
};


export default {
    colors,
    spacing,
    gutter,
    typeSizes,
    typography,
    fontFamily,
};
