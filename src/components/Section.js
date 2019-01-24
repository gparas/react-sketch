import React from 'react';
import { View, Text } from 'react-sketchapp';
import { colors, typography, spacing } from '../designSystem';

const titleStyle = {
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: colors.Grey,
    paddingVertical: spacing * 2,
    marginBottom: spacing * 4,
};

const Section = ({ title, children }) => (
    <View name={title} style={{ maxWidth: 960, marginBottom: 60 }}>
        <View style={{...titleStyle, width: 960}}>
            <Text style={typography.Title}>{title}</Text>
        </View>
        {children}
    </View>
);

export default Section;
