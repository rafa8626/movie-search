import React from 'react';
import { storiesOf } from '@storybook/react';

import { Main } from './Main';
import props from './Main.props';

storiesOf('Pages/Main', module)
    .add('default', () => (
        <Main
            {...props}
        />
    ));
