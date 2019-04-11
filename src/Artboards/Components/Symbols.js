import React from 'react';
import Button from './Button';
import { makeSymbol } from 'react-sketchapp';

const containedPrimary = () => <Button color="primary" />;
const containedSecondary = () => <Button color="secondary" />;
const containedBrand = () => <Button color="brand" />;

const outlinedPrimary = () => <Button variant="outlined" color="primary" />;
const outlinedSecondary = () => <Button variant="outlined" color="secondary" />;
const outlinedBrand = () => <Button variant="outlined" color="brand" />;

export const ContainedPrimarySymbol = makeSymbol(
    containedPrimary,
    'button/contained/primary'
);
export const ContainedSecondarySymbol = makeSymbol(
    containedSecondary,
    'button/contained/secondary'
);
export const ContainedBrandSymbol = makeSymbol(
    containedBrand,
    'button/contained/brand'
);

export const OutlinedPrimarySymbol = makeSymbol(
    outlinedPrimary,
    'button/outlined/primary'
);
export const OutlinedSecondarySymbol = makeSymbol(
    outlinedSecondary,
    'button/outlined/secondary'
);
export const OutlinedBrandSymbol = makeSymbol(
    outlinedBrand,
    'button/outlined/brand'
);
