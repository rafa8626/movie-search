
/** @jsx jsx */
// @flow
import { jsx } from '@emotion/core';
import type { Node } from 'react';
import { Fragment } from 'react';

type Props = {
    header: Node,
    content: Node,
};

const OneColumn = (props: Props) => (
    <Fragment>
        <header>{props.header}</header>
        <main>
            {/* <section id="hero">
                <div className="section-inner">
                    <h1>Movie Search</h1>
                </div>
            </section> */}
            <section id="main">
                {props.content}
            </section>
        </main>
        <footer>
            <p>Copyright &copy; {new Date().getFullYear()}</p>
        </footer>
    </Fragment>
);

export default OneColumn;
