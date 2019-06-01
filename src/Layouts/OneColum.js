
/** @jsx jsx */
// @flow
import { jsx } from '@emotion/core';
import type { Node } from 'react';
import { Fragment } from 'react';

type Props = {
    title: string | Object,
    content: Node,
    header?: Node,
    hero?: Node,
};

const OneColumn = (props: Props) => (
    <Fragment>
        <header>
            <div className='title'>
                <h1>{props.title}</h1>
            </div>
            <div className='details'>
                {props.header}
            </div>
        </header>
        <main>
            {props.hero && <div id='hero' style={{ backgroundImage: `url(${props.hero})`}}></div>}
            <section id='main'>{props.content}</section>
        </main>
        <footer>
            <p>Copyright &copy; {new Date().getFullYear()}</p>
        </footer>
    </Fragment>
);

export default OneColumn;
