import React from 'react';
import { makeSymbol, Artboard } from 'react-sketchapp';

import Button from './Button';

const ButtonSymbol = makeSymbol(Button, 'button/blue');

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
            <ButtonSymbol
                overrides={{
                    'Blue Square Text': 'Override Text',
                }}
            />
        </Artboard>
    );
}

export default Components;
