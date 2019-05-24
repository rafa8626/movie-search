import 'normalize.css';
import React, { lazy, Suspense } from 'react';
import {
    BrowserRouter, Route, Switch
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { Global } from '@emotion/core';

import globalStyles from './Styles/Global';

import Loader from './Components/Loader/Loader';
import store from './Store/Store';

const AsyncMain = lazy(() => import('./Pages/Main/Main'));
const AsyncDetails = lazy(() => import('./Pages/Details/Details'));
const AsyncNotFound = lazy(() => import('./Pages/NotFound/NotFound'));

const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <Suspense fallback={<Loader />}>
                <Global styles={globalStyles} />
                <Switch>
                    <Route exact strict path='/'
                        render={params => <AsyncMain {...params} />}
                    />
                    <Route path='/:type/:item' render={params => <AsyncDetails {...params} />} />
                    <Route path='/not-found'>
                        <AsyncNotFound />
                    </Route>
                    <Route path='/*'>
                        <AsyncNotFound />
                    </Route>
                </Switch>
            </Suspense>
        </BrowserRouter>
    </Provider>
);

export default App;
