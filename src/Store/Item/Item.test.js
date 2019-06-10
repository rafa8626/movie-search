import 'dotenv/config';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import reducer, * as actions from './Item';
import itemProps from '../../Components/Item/Item.props';

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
    it('loads a list of items', () => {
        const payload = [itemProps.item, itemProps.item];
        const action = { type: actions.ITEM_LOAD, payload };
        store.dispatch(actions.loadItems(payload));
        expect(store.getActions()).toContainEqual(expect.objectContaining(action));
        expect(reducer(undefined, action).items).toHaveLength(2);
        store.clearActions();
    });
    it('adds new items', () => {
        const { item } = itemProps;
        const action = { type: actions.ITEM_ADD, payload: item };
        store.dispatch(actions.addItem(item));
        expect(store.getActions()).toContainEqual(expect.objectContaining(action));
        expect(reducer(undefined, action).items).toHaveLength(1);
        store.clearActions();
    });
    it('removes an item', () => {
        const item = { itemId: itemProps.item.id, type: itemProps.item.type };
        const action = { type: actions.ITEM_REMOVE, payload: item };
        store.dispatch(actions.removeItem(item.itemId, item.type));
        expect(store.getActions()).toContainEqual(expect.objectContaining(action));
        expect(reducer(undefined, action).items).toHaveLength(0);
        store.clearActions();
    });
    it('loads the details of a specific item', () => {
        const item = { itemId: itemProps.item.id, type: itemProps.item.type };
        const action = { type: actions.ITEM_LOAD_DETAILS, payload: item };
        store.dispatch(actions.loadDetails(item.itemId, item.type));
        expect(store.getActions()).toContainEqual(expect.objectContaining(action));
        expect(reducer(undefined, action).details[item.type]).toHaveLength(0);


        store.clearActions();
    });
});
