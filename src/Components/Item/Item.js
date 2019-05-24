/** @jsx jsx */
// @flow
import { jsx } from '@emotion/core';

import itemStyles from './Item.styles';

/**
 * MovieItem.
 *
 * @returns {React.ReactNode}
 */

type Props = {
    item: Object,
};

const Item = (props: Props) => (
    <div className="item" id={props.item.id} css={itemStyles}>
        <img src={props.item.url} alt={props.item.name} />
        <div className='item-info'>
            <h1>{props.item.name}</h1>
            <p>{props.item.overview}</p>
            <a href={`/${props.item.type}/${props.item.id}`} target="_self">View more</a>
        </div>
    </div>
);

export default Item;
