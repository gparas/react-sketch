import React from 'react'
import {textColor} from '../../util';
import { View, Text } from 'react-sketchapp';

const styles = ({color, variant, size}) => {
    return {
        button: {
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: variant === 'contained' ? color : 'white',
            paddingVertical: size === 'large' ? 7 : 5,
            paddingHorizontal: size === 'large' ? 24 : 16,
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: variant === 'text' ? 'transparent' : color,
            borderRadius: 3,
            margin: 4,
        },
        label: {
            fontSize: size === 'large' ? 15 : 14,
            lineHeight: '1.75em',
            fontWeight: 500,
            color: variant === 'contained' ? textColor(color) : color,
        }
    }
}

const Button = (props) => {
    const { label, name, color, variant, size } = props;
    return (
        <View
            name={`Button ${name}`}
            style={styles({ color, variant, size }).button}
        >
            <Text
                name="Button label"
                style={styles({ color, variant, size }).label}
            >
                {label}
            </Text>
        </View>
    )
}

Button.defaultProps = {
    color: '#173d9a',
    label: 'Button Text',
    variant: 'contained',
    size: 'medium',
};

export default Button;
