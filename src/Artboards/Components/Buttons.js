import React, { Fragment } from 'react';
import { View, Text } from 'react-sketchapp';

import { capitalize } from '../../utils/helpers';
import { typography, fontWeight } from '../../styles/createTypography';
import { shadesOfGrey } from '../../colors';
import Button from '../../components/Button';

const variants = {
    contained: ['primary', 'secondary', 'brand'],
    outlined: ['primary', 'secondary', 'brand'],
    text: ['primary', 'secondary', 'brand'],
};

const Buttons = () => {
    return (
        <Fragment>
            <Text style={[typography.h3, { marginBottom: 40 }]}>Buttons</Text>
            {Object.keys(variants).map(variant => (
                <Fragment key={variant}>
                    <Text
                        style={[
                            typography.body1,
                            {
                                marginBottom: 8,
                                color: shadesOfGrey.grey,
                                fontWeight: fontWeight.bold,
                            },
                        ]}
                    >
                        {capitalize(variant)}
                    </Text>
                    <View
                        style={{
                            width: 500,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginBottom: 40,
                        }}
                    >
                        {variants[variant].map(color => (
                            <Button
                                key={color}
                                name={`button/${variant}/${color}`}
                                variant={variant}
                                color={color}
                            />
                        ))}
                        <Button
                            name={`button/${variant}/disabled`}
                            variant={variant}
                            color={'primary'}
                            disabled
                        />
                    </View>
                </Fragment>
            ))}
        </Fragment>
    );
};

export default Buttons;
