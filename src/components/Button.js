import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, TextStyles } from 'react-sketchapp';

import { button } from '../styles/createTypography';
import { brandColors, shadesOfGrey } from '../colors';

const Button = ({ color, variant, disabled, name }) => {
    const styles = StyleSheet.create({
        root: {
            borderRadius: 3,
            width: 112,
            // height: 36,/
            paddingVertical: 6,
        },
        contained: {
            backgroundColor: disabled ? shadesOfGrey.light : brandColors[color],
        },
        outlined: {
            borderWidth: 1,
            borderColor: disabled ? shadesOfGrey.grey : brandColors[color],
            borderStyle: 'solid',
        },
        text: {},
    });
    const typeStyles = {
        root: {
            ...button,
            textAlign: 'center',
        },
        text: {
            color: disabled ? shadesOfGrey.grey : brandColors[color],
        },
        outlined: {
            color: disabled ? shadesOfGrey.grey : brandColors[color],
        },
        contained: {
            color: disabled ? shadesOfGrey.grey : 'white',
        },
    };
    TextStyles.create(
        {
            context: context,
            clearExistingStyles: true,
        },
        typeStyles
    );
    return (
        <View
            name={name}
            style={StyleSheet.flatten([styles.root, styles[variant]])}
        >
            <Text name="label" style={[typeStyles.root, typeStyles[variant]]}>
                {color}
            </Text>
        </View>
    );
};

Button.propTypes = {
    color: PropTypes.oneOf(['brand', 'primary', 'secondary']),
    variant: PropTypes.oneOf(['text', 'outlined', 'contained']),
    disabled: PropTypes.bool,
};

Button.defaultProps = {
    color: 'brand',
    variant: 'contained',
};

export default Button;
