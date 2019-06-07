import 'dotenv/config';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import reducer from './Item';

jest.setTimeout(process.env.REACT_APP_JEST_TIMEOUT);
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Item - Actions', () => {
    let store;

    beforeAll(() => {
        store = mockStore({});
    });

    afterEach(() => {
        fetchMock.reset();
        fetchMock.restore();
        store = mockStore({});
        store.clearActions();
    });

    it('set the initial state of the reducer', () => {
        expect(reducer(undefined, {})).toContainAllKeys([
            'items',
            'details',
            'currentItem',
        ]);
    });
});
