import React from 'react';
import { View } from 'react-sketchapp';

const gridStyle = {
    row: {
        boxSizing: 'border-box',
        flexDirection: 'row',
        flexWrap: 'wrap',
        margin: -16,
        alignItems: 'center',
    },
    col: {
        boxSizing: 'border-box',
        margin: 16,
        flexBasis: 0,
        flexGrow: 1,
        maxWidth: '100%',
    },
};

const Grid = ({ name, variant, children, style }) => (
    <View
        name={name}
        style={{
            ...gridStyle[variant],
            ...style,
        }}
    >
        {children}
    </View>
);

Grid.defaultProps = {
    variant: 'row',
};

export default Grid;
