import React from 'react';
import { render, Page, Text } from 'react-sketchapp';
import { typography, button } from './designSystem';
import Grid from './Grid';

export default context => {
    const textAlign = ['left', 'center', 'right'];
    render(
        <Page name="typography">
            <Grid name="Text Style">
                {textAlign.map(align => (
                    <Grid
                        key={align}
                        name={`Text ${align}`}
                        variant="col"
                    >
                        {Object.keys(typography).map(variant => (
                            <Text
                                key={variant}
                                name={`${variant}/${align}/default`}
                                style={{
                                    ...typography[variant],
                                    textAlign: align
                                }}
                            >
                                {variant}
                            </Text>
                        ))}
                    </Grid>
                ))}
            </Grid>
            <Text name="button" style={{...button, textAlign: 'center'}}>
                {'button'.toUpperCase()}
            </Text>
        </Page>,
        context.document.currentPage(),
    );
};
