
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

export const typeSizes = [12, 14, 16, 18, 20, 22, 26, 30, 36];

export const fontFamily = 'Roboto';

export const typography = {
    Title: {
        fontFamily,
        fontSize: typeSizes[4],
        fontWeight: 500,
        color: colors.Black,
    },
    Button: {
        fontFamily,
        fontSize: typeSizes[1],
        textAlign: 'center',
        fontWeight: 'bold',
        lineHeight: 24,
    },
};


export default {
    colors,
    spacing,
    typeSizes,
    typography,
    fontFamily,
};
