import React from 'react';
import { render, Page, Artboard } from 'react-sketchapp';
import palette from '../../palette';
import Swatches from './Swatches';

export default context => {
    const brandColors = {
        brand: palette.brand.main,
        primary: palette.primary.main,
        secondary: palette.secondary.main,
        marketing: palette.marketing.main,
    };
    const uiColors = {
        success: palette.success.main,
        error: palette.error.main,
        warning: palette.warning.main,
        info: palette.info.main,
    };
    render(
        <Page name="colors">
            <Artboard
                name="Colors"
                style={{
                    width: 1440,
                    padding: 36,
                }}
            >
                <Swatches name="Brand Colors" data={brandColors}/>
                <Swatches name="UI Colors" data={uiColors}/>
            </Artboard>
        </Page>,
        context.document.currentPage(),
    );
};
