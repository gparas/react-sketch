import React from 'react';
import { Artboard } from 'react-sketchapp';
import { brandColors, uiColors, shadesOfGrey } from '../../colors';
import Swatches from './Swatches';

const Colors = () => {
    // const shadesOfGrey = chroma.scale([grey, '#ffffff']).colors(4);
    return (
        <Artboard
            name="Colors"
            style={{
                width: 1440,
                padding: 36,
                marginBottom: 144,
            }}
        >
            <Swatches name="Brand Colors" data={brandColors} />
            <Swatches name="UI Colors" data={uiColors} />
            <Swatches name="Shades of Grey" data={shadesOfGrey} />
        </Artboard>
    );
};

export default Colors;
