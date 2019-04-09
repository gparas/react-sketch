import React from 'react';
import chroma from 'chroma-js';
import { Text, View } from 'react-sketchapp';

import { capitalize } from '../../utils/helpers';
import { typography } from '../../styles/createTypography';

import Grid from '../../components/Grid';

const Swatches = props => {
    const { name, data } = props;
    return (
        <View style={{ padding: 36 }}>
            <Text
                name={name}
                style={{
                    ...typography.h3,
                    marginBottom: 40,
                }}
            >
                {name}
            </Text>
            <Grid name={name}>
                {Object.keys(data).map(color => (
                    <Grid key={color} name={`Swatche ${color}`} variant="col">
                        <View
                            name={color}
                            style={{
                                height: 200,
                                borderRadius: 6,
                                backgroundColor: data[color],
                                marginBottom: 8,
                            }}
                        />
                        <Text
                            style={{
                                ...typography.h6,
                            }}
                        >
                            {capitalize(color)}
                        </Text>
                        <Text
                            style={{
                                ...typography.body1,
                                textTransform: 'uppercase',
                            }}
                        >
                            {chroma(data[color]).css()}
                        </Text>
                        <Text
                            style={{
                                ...typography.body1,
                                textTransform: 'uppercase',
                            }}
                        >
                            {chroma(data[color]).css('hsl')}
                        </Text>
                        <Text
                            style={{
                                ...typography.body1,
                            }}
                        >
                            {capitalize(data[color])}
                        </Text>
                    </Grid>
                ))}
            </Grid>
        </View>
    );
};

export default Swatches;
