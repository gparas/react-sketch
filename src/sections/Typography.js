import React from 'react';
import { Text, View } from 'react-sketchapp';

import { colors, fontFamily, fontWeights, typeSizes, typography, spacing } from '../designSystem';

import Section from '../components/Section';
import Grid from '../components/Grid';

const fontStyle = {
    fontFamily,
    fontSize: typeSizes[6],
    color: colors.Black,
}

const Typography = () => (
    <Section title="Typography">
        <Grid name="Font" variant="row" style={{marginBottom: 16}}>
            <Grid name="Font Family" variant="col" col={5}>
                <Text style={{...typography.Caption, marginBottom: 13}}>FONT</Text>
                <Text style={{...fontStyle, fontSize: typeSizes[8]}}>{fontFamily}</Text>
            </Grid>
            <Grid name="Font Weights" variant="col" col={7}>
                <Grid variant="row">
                    <Grid variant="col" col={12}>
                        <Text style={typography.Caption}>FONT WEIGHT</Text>
                    </Grid>
                    {Object.keys(fontWeights).map(weight =>
                        <Grid key={weight} name="weight" variant="col" col={4}>
                            <Text
                                style={{
                                    ...fontStyle,
                                    fontWeight: fontWeights[weight]
                                }}
                            >
                                {weight}
                            </Text>
                        </Grid>
                    )}
                </Grid>
            </Grid>
        </Grid>
        <Grid name="Sizes" variant="row" style={{alignItems: 'flex-end', flexDirection: 'row-reverse'}}>
            <Grid variant="col" col={12}>
                <Text style={typography.Caption}>PRE-DEFINED SIZES</Text>
            </Grid>
            {Object.keys(typeSizes).map(size =>
                <Grid
                    key={size}
                    name="size"
                    variant="col"
                    col={1.5}
                >
                    <View
                        style={{
                            paddingBottom: spacing,
                            marginBottom: spacing,
                            borderBottomWidth: 1,
                            borderBottomColor: colors.LightGrey,
                        }}
                    >
                        <Text
                            style={{
                                ...typography.Body,
                                fontSize: typeSizes[size],
                                lineHeight: typeSizes[size],
                            }}
                        >
                            Aa
                        </Text>
                    </View>
                    <Text style={typography.Caption}>{typeSizes[size]}px</Text>
                </Grid>
            )}
        </Grid>
    </Section>
);

export default Typography;
