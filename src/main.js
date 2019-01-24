import React from 'react';
import { render, Page } from 'react-sketchapp';

import Colors from './sections/Colors';
import Typography from './sections/Typography';
import Buttons from './sections/Buttons';


export default context => {
    render(
        <Page name="Styleguide">
            <Colors/>
            <Typography/>
            <Buttons/>
        </Page>,
        context.document.currentPage(),
    );
};
