import React from 'react';
import { makeSymbol, Artboard } from 'react-sketchapp';

import Button from './Button';

const ButtonPrimary = () => <Button color="primary" />;
const ButtonSecondary = () => <Button color="secondary" />;
const ButtonBrand = () => <Button color="brand" />;

const ButtonPrimarySymbol = makeSymbol(ButtonPrimary, 'button/primary');
const ButtonSecondarySymbol = makeSymbol(ButtonSecondary, 'button/secondary');
const ButtonBrandSymbol = makeSymbol(ButtonBrand, 'button/brand');

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
            <ButtonSecondarySymbol />
        </Artboard>
    );
};

export default Components;
