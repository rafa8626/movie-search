// @flow

export const ITEM_ADD = 'ITEM_ADD';
export const ITEM_REMOVE = 'ITEM_REMOVE';
export const ITEM_LOAD = 'ITEM_LOAD';
export const ITEM_SAVE_DETAILS = 'ITEM_SAVE_DETAILS';
export const ITEM_LOAD_DETAILS = 'ITEM_LOAD_DETAILS';

/**
 * Load a list of items (movies or series)
 *
 * @param {object[]} items
 * @returns {void}
 */
export const loadItems = (items: Array<Object>) => (dispatch: Function) => {
    dispatch({
        type: ITEM_LOAD,
        payload: items,
    });
};

/**
 * Add a movie/serie to the list
 *
 * @param {object} movie
 * @returns {void}
 */
export const addItem = (item: Object) => (dispatch: Function) => {
    dispatch({
        type: ITEM_ADD,
        payload: item,
    });
};

/**
 * Remove a movie/serie from the existing list
 *
 * @param {number} movieId
 * @returns {void}
 */
export const removeItem = (itemId: number) => (dispatch: Function) => {
    dispatch({
        type: ITEM_REMOVE,
        payload: itemId,
    });
};

export const saveDetails = (details: Object) => (dispatch: Function) => {
    dispatch({
        type: ITEM_SAVE_DETAILS,
        payload: details
    });
};

export const loadDetails = (itemId: number, type: 'movie' | 'tv') => (dispatch: Function) => {
    dispatch({
        type: ITEM_LOAD_DETAILS,
        payload: { itemId, type, }
    });
};

const initialState = {
    items: [],
    details: {
        movie: [],
        tv: [],
    },
    currentItem: {},
};

/**
 * Items reducer
 *
 * @param {object} [state=initialState]  The initial set of elements to be updated once actions are executed.
 * @param {string} action  The action to update the store's element.
 * @returns {void}
 */
export default function movieSearch(state: Object = initialState, action: Object) {
    switch (action.type) {
        case ITEM_LOAD:
            return {
                ...state,
                items: action.payload,
            };
        case ITEM_ADD:
            return {
                ...state,
                items: [...state.items, action.payload]
            };
        case ITEM_REMOVE:
            const idx = state.items.findIndex(item => item.id === action.payload);
            if (idx > -1) {
                return {
                    ...state,
                    items: [...state.items.slice(0, idx), ...state.items.slice(idx + 1)]
                };
            }
            return state;
        case ITEM_LOAD_DETAILS:
            const details = action.payload.details[action.payload.type].find(item => item.id === action.payload.itemId);
            if (details) {
                return {
                    ...state,
                    currentItem: {
                        ...state.currentItem,
                        ...details,
                    }
                };
            }
            return state;
        case ITEM_SAVE_DETAILS:
            return {
                ...state,
                details: [...state.details, action.payload]
            };
        default:
            return state;
    }
}
