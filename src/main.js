import React from 'react';
import { render, Page, View } from 'react-sketchapp';
import { colors } from './designSystem';

import Button from './components/Button';
import Section from './components/Section';


export default context => {
    render(
        <Page name="Styleguide">
            <Section title="Buttons">
                <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                    {Object.keys(colors).map(color => {
                        return (
                            <Button
                                key={color}
                                label={color}
                                backgroundColor={colors[color]}
                                style={{marginRight: 4}}
                            />
                        );
                    })}
                </View>
            </Section>
        </Page>,
        context.document.currentPage(),
    );
};
