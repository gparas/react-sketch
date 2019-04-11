import React from 'react';
import { Artboard } from 'react-sketchapp';

import Buttons from './Buttons';

const Components = () => {
    return (
        <Artboard
            name="Components"
            style={{
                width: 1440,
                padding: 36,
                marginBottom: 144,
            }}
        >
            <Buttons />
        </Artboard>
    );
};

export default Components;
