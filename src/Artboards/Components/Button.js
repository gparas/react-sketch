import React from 'react';
import PropTypes from 'prop-types';
import { View, Text} from 'react-sketchapp';

import { button } from '../../styles/createTypography';
import { brandColors } from '../../colors';

const style = {
    root: {
        padding: '6px 16px',
        borderRadius: 2,
    },
    brand: {
        backgroundColor: brandColors.brand,
    },
    primary: {
        backgroundColor: brandColors.primary,
    },
    secondary: {
        backgroundColor: brandColors.secondary,
    },
}

const Button = ({color}) => (
    <View
        name="Blue Square"
        style={[style.root, style[color]]}
    >
        <Text
            style={[
                button,
                {
                    textAlign: 'center',
                    color: 'white',
                }
            ]}
        >
            Blue Square Text
        </Text>
    </View>
);

Button.propTypes = {
    color: PropTypes.oneOf(['brand', 'primary', 'secondary']),
}

Button.defaultProps = {
    color: 'brand',
};

export default Button;
