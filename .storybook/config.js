import { configure, addDecorator } from '@storybook/react';
import { withA11Y } from '@storybook/addon-a11y';
import { configureActions } from '@storybook/addon-actions';

import globalStyles from '../src/Styles/Global';

/* eslint-disable */
// injects global CSS styles from the Globals emotion.js stylesheet
// injectGlobal`
//     ${globalStyles}
// `
/* eslint-enable */

// controls the depth of the logs reported from the actions add-on, can aid in debugging
configureActions({
  depth: 100
});

// collects stories filenames to load in loadStories() function below
const req = require.context('../src', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

// add accessibility check addon to all stories
addDecorator(withA11Y);

configure(loadStories, module);