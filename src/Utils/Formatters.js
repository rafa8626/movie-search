// @flow

export function formatItem(item: Object, config: Object) {
    return {
        name: item.media_type === 'movie' ? item.original_title : item.original_name,
        value: item.id,
        type: item.media_type,
        url: `${config.images.base_url}${config.images.still_sizes[1]}${item.poster_path}`
    };
}

export function formatItemDetails(item: Object, config: Object) {
    const {
        id, imdb_id: imdbId, homepage, release_date: releaseDate, title, name, tagline, genres, overview, duration,
        created_by: createdBy, poster_path: poster, first_air_date: firstDate, last_air_date: lastDate
    } = item;

    const videos = item.videos.results.map(video => {
        if (video.site === 'YouTube') {
            return `https://www.youtube.com/watch?v=${video.key}`;
        }
        return null;
    });

    let date = releaseDate;
    if (date) {
        date = date.replace(/(\d{4}).*/, '$1');
    } else {
        date = `(${firstDate.replace(/(\d{4}).*/, '$1')} - `;
        if (lastDate) {
            date += `${lastDate.replace(/(\d{4}).*/, '$1')}`
        } else {
            date += 'present'
        }
        date += ')';
    }

    const images = item.images.backdrops.map(image => `${config.images.base_url}${config.images.still_sizes[3]}${image.file_path}`);
    const genresList = genres && genres.length ? genres.map(genre => genre.name) : [];
    const creators = createdBy && createdBy.length ? createdBy.map(creator => ({
        id: creator.id,
        profile: creator.profile_path ? `${config.images.base_url}${config.images.still_sizes[3]}${creator.profile_path}` : '',
        name: creator.name,
    })) : [];

    return {
        id,
        title: title || name,
        overview,
        imdbId,
        homepage,
        date,
        duration,
        tagline,
        bgImg: `${config.images.base_url}${config.images.still_sizes[3]}${item.backdrop_path}`,
        poster: `${config.images.base_url}${config.images.still_sizes[3]}${poster}`,
        videos,
        images,
        genres: genresList,
        creators,
    };
}

export function extractYear(date: string) {

}
