import React from 'react';
import { render, Page } from 'react-sketchapp';

import { Colors, Typography } from './Artboards';


export default context => {
    render(
        <Page name="Styleguide">
            <Colors />
            <Typography />
        </Page>,
        context.document.currentPage(),
    );
};
