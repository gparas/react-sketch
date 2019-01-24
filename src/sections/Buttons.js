import React from 'react';
import { View } from 'react-sketchapp';

import { colors } from '../designSystem';

import Button from '../components/Button';
import Section from '../components/Section';

const btnColors = {
    Brand: colors.Brand,
    Primary: colors.Primary,
    Secondary: colors.Secondary,
    Marketing: colors.Marketing,
};

const Buttons = () => (
    <Section title="Buttons">
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {Object.keys(btnColors).map(color => {
                return (
                    <Button
                        key={color}
                        label={color}
                        color={colors[color]}
                        style={{ marginRight: 4 }}
                    />
                );
            })}
        </View>
    </Section>
);

export default Buttons;
