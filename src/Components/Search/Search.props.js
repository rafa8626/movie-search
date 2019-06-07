import Api from '../../Utils/Api';

const api = new Api();
const props = {
    labelKey: 'name',
    addedMessage: '',
    api,
    config: {
        images: {
            base_url: 'http://image.tmdb.org/t/p/',
            still_sizes: [
                'w92',
                'w185',
                'w300',
                'original',
            ],
        },
    },
    filterItems: [],
    changeHandler: () => { },
};

export default props;
