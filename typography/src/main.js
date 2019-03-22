import React from 'react';
import { render, Page, Text, Artboard } from 'react-sketchapp';
import { typography, button } from './designSystem';
import { capitalize } from '../../helpers';
import palette from '../../palette';
import Grid from './Grid';

export default context => {
    const colors = {
        default: palette.text.primary,
        brand: palette.brand.main,
        primary: palette.primary.main,
        textSecondary: palette.text.secondary,
    };
    render(
        <Page name="typography">
            <Artboard
                name="Typography"
                style={{
                    width: 1440,
                    padding: 72,
                }}
            >
                <Grid name="Text Style">
                    {Object.keys(colors).map(color => (
                        <Grid
                            key={color}
                            name={`Text ${color}`}
                            variant="col"
                        >
                            {Object.keys(typography).map(variant => (
                                <Text
                                    key={variant}
                                    name={`${variant} / ${color}`}
                                    style={{
                                        ...typography[variant],
                                        color: colors[color],
                                    }}
                                >
                                    {capitalize(variant)}
                                </Text>
                            ))}
                        </Grid>
                    ))}
                    <Grid
                        name="Text White"
                        variant="col"
                        style={{
                            backgroundColor: palette.brand.dark,
                        }}
                    >
                        {Object.keys(typography).map(variant => (
                            <Text
                                key={variant}
                                name={`${variant} / white`}
                                style={{
                                    ...typography[variant],
                                    color: '#ffffff',
                                }}
                            >
                                {capitalize(variant)}
                            </Text>
                        ))}
                    </Grid>
                </Grid>
            </Artboard>
        </Page>,
        context.document.currentPage(),
    );
};
