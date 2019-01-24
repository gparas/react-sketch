import React from 'react';
import { View, Text } from 'react-sketchapp';
import { colors, typography, spacing, gutter } from '../designSystem';

const titleStyle = {
    boxSizing: 'border-box',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: colors.Grey,
    paddingVertical: spacing * 2,
    marginBottom: spacing * 3,
};

const Section = ({ title, children }) => (
    <View name={title} style={{ maxWidth: 960, marginBottom: 60, paddingHorizontal: gutter, }}>
        <View style={{...titleStyle, width: 960 - (gutter * 2)}}>
            <Text style={typography.Title}>{title}</Text>
        </View>
        {children}
    </View>
);

export default Section;
