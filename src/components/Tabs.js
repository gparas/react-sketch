import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, TextStyles } from 'react-sketchapp';

import { button } from '../styles/createTypography';
import { brandColors, shadesOfGrey } from '../colors';

const Button = ({ color, variant, disabled, name }) => {
    const styles = StyleSheet.create({
        root: {
            maxWidth: 264,
            minWidth: 160,
            boxSizing: 'border-box',
            padding: 0,
            minHeight: 48,
            alignItems: 'center',
            justifyContent: 'center',
        },
        active: {
            borderBottomWidth: 2,
            borderBottomColor: brandColors[color],
            borderStyle: 'solid',
        },
        text: {},
    });
    const typeStyles = {
        root: {
            ...button,

        },
        active: {
            color: brandColors[color],
        },
        disabled: {
            color: shadesOfGrey.grey,
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
            style={StyleSheet.flatten([styles.root, styles.active])}
        >
            <Text name="label" style={[typeStyles.root, typeStyles.active]}>
                {color}
            </Text>
        </View>
    );
};

Button.propTypes = {
    color: PropTypes.oneOf(['primary', 'secondary', 'default']),
    disabled: PropTypes.bool,
};

Button.defaultProps = {
    color: 'default',
};

export default Button;
