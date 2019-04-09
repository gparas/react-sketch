import React from 'react';
import { render, Page } from 'react-sketchapp';

import { Colors, Typography, Components } from './Artboards';

export default context => {
    render(
        <Page name="Styleguide">
            <Colors />
            <Typography />
            <Components />
        </Page>,
        context.document.currentPage()
    );
};
