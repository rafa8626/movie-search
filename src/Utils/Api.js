import axios from 'axios';

class Api {
    /**
     * Create an instance of Api.
     *
     * @param {?string} url
     * @param {boolean} [noCache=true]
     * @memberof Api
     */
    constructor(noCache = true) {
        this.instance = axios.create({
            baseURL: 'https://api.themoviedb.org/3/',
        });
        this.params = {
            noCache,
        };
    }

    /**
     * Wrapper for GET request.
     *
     * @param {string} method  The name of the API method in URL readable format.
     * @param {?object} params  The params to call the method.
     * @returns {AxiosInstance}
     * @memberof Api
     */
    get(type, params = null) {
        return this.request(type, params);
    }

    /**
     * Main wrapper for Axios.
     *
     * @param {string} type  The request type (GET/POST).
     * @param {string|null} stub   optional stub
     * @param {string} method  The method from API to be executed.
     * @param {?object} params  The params to pass to method.
     * @returns {AxiosInstance}
     * @memberof Api
     */
    request(type, params = null) {
        return new Promise(resolve => {
            if (!params) {
                params = {};
            }

            params.api_key = process.env.REACT_APP_API_KEY;
            if (this.params.noCache) {
                params.nocache = Date.now();
            }

            const stub = type === 'multi' ? 'search/' : '';
            const query = Object.keys(params).map(key => `${key}=${params[key]}`).join('&');
            const instance = this.instance.get(`${stub}${type}${query ? `?${query}` : ''}`);

            return instance
                .then(response => resolve({ error: null, data: response.data }))
                .catch(error => resolve({ error }));
        });
    }
}

export default Api;
