import React from 'react';
import { storiesOf } from '@storybook/react';

import Details from './Details';
import props from './Details.props';

storiesOf('Pages/Details', module)
    .add('default', () => (
        <Details
            {...props}
        />
    ));
