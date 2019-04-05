import React from 'react';
import { Text, Artboard } from 'react-sketchapp';
import { typography } from '../../styles/createTypography';
import { capitalize } from '../../utils/helpers';
import Grid from '../../components/Grid';

const Typography = () => {
    return (
        <Artboard
            name="Typography"
            style={{
                width: 1440,
                padding: 72,
                marginBottom: 144,
            }}
        >
            <Grid name="row" style={{ margin: 0 }}>
                {['style', 'size', 'weight', 'line Height'].map(item => {
                    return (
                        <Grid name="col" variant="col" key={item}>
                            <Text
                                style={{
                                    ...typography.body2,
                                    textTransform: 'uppercase',
                                    textAlign: item !== 'style' && 'center',
                                }}
                            >
                                {item}
                            </Text>
                        </Grid>
                    )
                })}
            </Grid>
            {Object.keys(typography).map(variant => {
                const data = {
                    name: capitalize(variant),
                    size: typography[variant].fontSize,
                    weight: typography[variant].fontWeight,
                    lineHeight: typography[variant].lineHeight,
                }
                return (
                    <Grid name="row" key={variant} style={{ margin: 0 }}>
                        {Object.keys(data).map(value => {
                            const styles = value === 'name' ? {

                                ...typography[variant]
                            } : {
                                    ...typography.subtitle1,
                                    textAlign: 'center',
                                };
                            return (
                                <Grid name="col" variant="col" key={value}>
                                    <Text
                                        style={{
                                            ...styles,
                                        }}
                                    >
                                        {data[value]}
                                    </Text>
                                </Grid>
                            );
                        })}
                    </Grid>
                );
            })}
        </Artboard>
    )
}

export default Typography;
