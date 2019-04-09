import React from 'react';
import { View, Text } from 'react-sketchapp';

import { colors, spacing, typography } from '../designSystem';

import Section from '../components/Section';
import Grid from '../components/Grid';

const Colors = () => (
    <Section title="Colors">
        <Grid name="Swatches" variant="row">
            {Object.keys(colors).map(color => {
                return (
                    <Grid key={color} name={color} variant="col" col={3}>
                        <View
                            style={{
                                flexDirection: 'row',
                                marginBottom: spacing,
                            }}
                        >
                            <View
                                style={{
                                    backgroundColor: colors[color],
                                    height: 60,
                                    flexBasis: '55%',
                                }}
                            />
                            <View
                                style={{
                                    backgroundColor: colors[color],
                                    height: 60,
                                    flexBasis: '15%',
                                    opacity: 0.75,
                                }}
                            />
                            <View
                                style={{
                                    backgroundColor: colors[color],
                                    height: 60,
                                    flexBasis: '15%',
                                    opacity: 0.5,
                                }}
                            />
                            <View
                                style={{
                                    backgroundColor: colors[color],
                                    height: 60,
                                    flexBasis: '15%',
                                    opacity: 0.25,
                                }}
                            />
                        </View>
                        <Text
                            style={{ ...typography.Body, fontWeight: 'bold' }}
                        >
                            {color}
                        </Text>
                        <Text style={typography.Caption}>{colors[color]}</Text>
                    </Grid>
                );
            })}
        </Grid>
    </Section>
);

export default Colors;
