import React from 'react';
import { storiesOf } from '@storybook/react';

import NotFound from './NotFound';

storiesOf('Pages/NotFound', module)
    .add('default', () => (
        <NotFound />
    ));
