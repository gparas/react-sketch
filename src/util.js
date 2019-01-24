import chroma from 'chroma-js';

export const textColor = hex => {
    const vsWhite = chroma.contrast(hex, 'white');
    if (vsWhite > 3) {
        return 'white';
    }
    return chroma(hex)
        .darken(3)
        .hex();
};