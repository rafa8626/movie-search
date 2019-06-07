import React from 'react';
import { storiesOf } from '@storybook/react';

import Search from './Search';
import props from './Search.props';

storiesOf('Components/Search', module)
    .add('default', () => (
        <Search {...props} />
    ));
