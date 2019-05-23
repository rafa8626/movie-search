// @flow

export const MOVIE_ADD = 'MOVIE_ADD';
export const MOVIE_REMOVE = 'MOVIE_REMOVE';

/**
 * Add a movie to the list
 *
 * @param {object} movie
 * @returns {void}
 */
export const addItem = (movie: Object) => (dispatch: Function) => {
    dispatch({
        type: MOVIE_ADD,
        payload: movie,
    });
};

/**
 * Remove a movie from the existing list
 *
 * @param {number} movieId
 * @returns {void}
 */
export const removeItem = (movieId: number) => (dispatch: Function) => {
    dispatch({
        type: MOVIE_REMOVE,
        payload: movieId,
    });
};

const initialState = {
    items: [],
};

/**
 * Movie reducer
 *
 * @param {object} [state=initialState]  The initial set of elements to be updated once actions are executed.
 * @param {string} action  The action to update the store's element.
 * @returns {void}
 */
export default function movies(state: Object = initialState, action: Object) {
    switch (action.type) {
        case MOVIE_ADD:
            return {
                ...state,
                items: [...state.items, action.payload]
            };
        case MOVIE_REMOVE:
            const idx = state.items.findIndex(item => item.id === action.payload);
            if (idx > -1) {
                return {
                    ...state,
                    items: [...state.items.slice(0, idx), ...state.items.slice(idx + 1)]
                };
            }
            return state;
        default:
            return state;
    }
}
