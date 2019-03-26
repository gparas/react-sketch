import React from 'react';
import { Text, Artboard } from 'react-sketchapp';
import { typography } from '../../styles/createTypography';
import { capitalize } from '../../utils/helpers';

const Typography = () => {
    return (
        <Artboard
            name="Typography"
            style={{
                width: 1440,
                padding: 72,
            }}
        >
            {Object.keys(typography).map(variant => (
                <Text
                    key={variant}
                    style={{
                        ...typography[variant],
                    }}
                >
                    {capitalize(variant)}
                </Text>
            ))}
        </Artboard>
    )
}

export default Typography;
