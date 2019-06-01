/**
 * Check if an object is empty.
 *
 * @param {Object} object
 * @returns {boolean}
 */
export default function isEmpty(object: Object) {
    return [Object, Array].includes((object || {}).constructor) && !Object.entries((object || {})).length;
}
