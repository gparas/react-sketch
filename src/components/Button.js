import React from 'react'
import { View, Text } from 'react-sketchapp';
import { textColor } from '../util';
import { colors, typography, spacing } from '../designSystem';

const buttonStyle = {
    borderRadius: 3,
    boxSizing: 'border-box',
    color: colors.White,
    cursor: 'pointer',
    paddingHorizontal: spacing * 2,
    paddingVertical: 6,
    width: 'auto',
};

const Button = ({ label, color, style }) => (
    <View
        name="Button"
        style={{
            ...buttonStyle,
            backgroundColor: color,
            ...style
        }}
    >
        <Text
            name="Label"
            style={{
                ...typography.Button,
                color: textColor(color)
            }}
        >
            {label}
        </Text>
    </View>
);

Button.defaultProps = {
    color: colors.Brand,
    label: 'Button Text',
};

export default Button;
