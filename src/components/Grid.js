import React from 'react';
import { View } from 'react-sketchapp';
import { gutter } from '../designSystem';

const gridStyle = {
    row: {
        boxSizing: 'border-box',
        flexDirection: 'row',
        flexWrap: 'wrap',
        margin: -gutter,
    },
    col: {
        boxSizing: 'border-box',
        padding: gutter,
    }
}

const Grid = ({ name, variant, col, children, style }) => (
    <View
        name={name}
        style={{
            ...gridStyle[variant],
            flexBasis: variant === 'col' ? `${(col/12)*100}%` : '100%',
            ...style,
        }}
    >
        {children}
    </View>
);

Grid.defaultProps = {
    col: 4,
    variant: 'row',
};

export default Grid;
