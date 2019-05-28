
/** @jsx jsx */
// @flow
import { jsx } from '@emotion/core';
import { Component } from 'react';
import type { Node } from 'react';
import { AsyncTypeahead, Highlighter } from 'react-bootstrap-typeahead';
import store from 'store';
import 'react-bootstrap-typeahead/css/Typeahead.css';

import searchStyles from './Search.styles';

type Props = {
    labelKey: string,
    addedMessage?: string | Node,
    api: Object,
    config: Object,
    filterItems: Array<Object>,
    changeHandler: Function,
};

type State = {
    isLoading: boolean,
    type: 'movie' | 'tv',
    options: Array<Object>,
};

class Search extends Component<Props, State> {
    typeaheadRef: *;

    constructor() {
        super();
        this.setTypeaheadRef = this.setTypeaheadRef.bind(this);
        this.onChange = this.onChange.bind(this);
        this.formatMenuItems = this.formatMenuItems.bind(this);
        this.searchItem = this.searchItem.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);
    }

    static defaultProps = {
        filterItems: [],
        changeHandler: () => { },
        displayAutofillHelper: () => { },
        hideAutofillHelper: () => { },
    }

    state = {
        isLoading: false,
        options: [],
    }

    setTypeaheadRef: (typeahead: *) => void

    onChange: (item: Array<Object>) => void

    formatMenuItems: (option: Object, props: Object) => void

    searchItem: (query: string) => void

    handleOptionChange: (e: Object) => void

    /**
     * Set the reference passed down from parent component and use that to display the autofill helper
     * @returns {void}
     *
     */
    setTypeaheadRef(typeahead: *) {
        this.typeaheadRef = typeahead;
    }

    /**
     * Execute callback to add diagnosis and clear input.
     *
     * @param {Array<Object>} item
     * @returns {void}
     * @memberof Typeahead
     */
    onChange(item: Array<Object>) {
        this.props.changeHandler(item[0]);
        const saved = store.get('ms-search-items') || [];
        if (saved && saved.length) {
            const idx = saved.findIndex(obj => obj.id === item[0].id && obj.type === item[0].type);
            if (idx === -1) {
                saved.push(item[0]);
                store.set('ms-search-items', saved);
            }
        } else {
            saved.push(item[0]);
            store.set('ms-search-items', saved);
        }
        if (this.typeaheadRef) {
            setTimeout(() => {
                if (this.typeaheadRef !== null) {
                    this.typeaheadRef.getInstance().clear();
                }
            }, 0);
        }
    }

    handleOptionChange(e: Object) {
        this.setState({ type: e.target.value });
    }

    /**
     * Callback to append message in item that are already added
     *
     * @param {Object} option
     * @param {Object} props
     * @returns {Array[*]}
     * @memberof Typeahead
     */
    formatMenuItems(option: Object, props: Object) {
        return [
            <Highlighter key={this.props.labelKey} search={props.text}>
                {option[this.props.labelKey]}
            </Highlighter>,
            (this.props.addedMessage && option.disabled ? <span key={`msg-${this.props.labelKey}`}>{this.props.addedMessage}</span> : ''),
        ];
    }

    /**
     * Callback to request API to search for items asynchronously.
     *
     * It will determine also which items must be disabled.
     *
     * @param {string} query
     * @returns {void}
     * @memberof Typeahead
     */
    async searchItem(query: string) {
        this.setState({ isLoading: true });

        const { config, api } = this.props;
        const response = await api.get('multi', { query });
        let options = response.data && response.data.results ? response.data.results : [];

        if (options.length) {
            options = options.filter(item => item.media_type !== 'person').map(item => ({
                ...item,
                name: item.media_type === 'movie' ? item.original_title : item.original_name,
                value: item.id,
                type: item.media_type,
                url: `${config.images.base_url}${config.images.still_sizes[1]}${item.poster_path}`
            }));
        }

        this.setState({ isLoading: false, options, });
    }

    /**
     * If the items to be filtered change, clear input.
     *
     * @param {Object} prevProps
     * @returns {void}
     * @memberof Typeahead
     */
    componentDidUpdate(prevProps: Object) {
        if (prevProps.filterItems !== this.props.filterItems && this.typeaheadRef) {
            setTimeout(() => {
                if (this.typeaheadRef !== null) {
                    this.typeaheadRef.getInstance().clear();
                }
            }, 0);
        }
    }

    /**
     * Render autocomplete box.
     *
     * @returns {React.ReactNode}
     * @memberof Typeahead
     */
    render() {
        return (
            <div className='search-container' css={searchStyles}>
                <AsyncTypeahead
                    id="search-container"
                    placeholder="Start typing you favorite movie/TV series..."
                    isLoading={this.state.isLoading}
                    onSearch={this.searchItem}
                    options={this.state.options}
                    labelKey='name'
                    allowNew={false}
                    maxResults={10}
                    minLength={2}
                    highlightOnlyResult={true}
                    selectHintOnEnter={true}
                    multiple={false}
                    delay={100}
                    promptText=''
                    searchText=''
                    useCache={false}
                    renderMenuItemChildren={this.formatMenuItems}
                    ref={typeahead => this.setTypeaheadRef(typeahead)}
                    onChange={this.onChange}
                />
            </div>
        );
    }
}

export default Search;
