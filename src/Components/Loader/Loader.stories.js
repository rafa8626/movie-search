import React from 'react';
import { storiesOf } from '@storybook/react';

import Loader from './Loader';

storiesOf('Components/Loader', module)
    .add('default', () => (
        <Loader />
    ));
