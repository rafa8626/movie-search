// @flow

export default function formatItem(item: Object, config: Object) {
    return {
        name: item.media_type === 'movie' ? item.original_title : item.original_name,
        value: item.id,
        type: item.media_type,
        url: `${config.images.base_url}${config.images.still_sizes[1]}${item.poster_path}`
    };
}
