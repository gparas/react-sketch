import React from 'react';
import { render, Document, Page } from 'react-sketchapp';

import { Colors, Typography, Components } from './Artboards';

export default context => {
    render(
        <Document>
            <Page name="Colors">
                <Colors />
            </Page>
            <Page name="Typography">
                <Typography />
            </Page>
            <Page name="Components">
                <Components />
            </Page>
        </Document>,
        context.document.documentData()
    );
};
