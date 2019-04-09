import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-sketchapp';

import { button } from '../../styles/createTypography';
import { brandColors } from '../../colors';

const Button = ({ color, variant }) => {
    return (
        <View
            name={color}
            style={{
                paddingVertical: 6,
                borderRadius: 2,
                width: 112,
                backgroundColor:
                    variant === 'contained' ? brandColors[color] : 'white',
                borderWidth: variant === 'outlined' ? 1 : 0,
                borderColor: brandColors[color],
                borderStyle: 'solid',
            }}
        >
            <Text
                name="label"
                style={[
                    button,
                    {
                        textAlign: 'center',
                        color:
                            variant !== 'contained'
                                ? brandColors[color]
                                : 'white',
                    },
                ]}
            >
                {color}
            </Text>
        </View>
    );
};

Button.propTypes = {
    color: PropTypes.oneOf(['brand', 'primary', 'secondary']),
    variant: PropTypes.oneOf(['text', 'outlined', 'contained']),
};

Button.defaultProps = {
    color: 'brand',
    variant: 'contained',
};

export default Button;
