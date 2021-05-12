import React, {Component} from "react";
// @ts-ignore
import { InstantSearch, Configure, Index, Highlight, connectAutoComplete } from 'react-instantsearch-dom';
import Autosuggest from 'react-autosuggest';
import algoliasearch from "algoliasearch";

const searchClient = algoliasearch(
    process.env.applicationID,
    process.env.adminApiKey
);

const Search = () => (
    <InstantSearch searchClient={searchClient} indexName="abapGit.org">
        <AutoComplete />
        <Configure hitsPerPage={1} />
    </InstantSearch>
)

class SearchComponent extends Component {
    // @ts-ignore
    state = {value: this.props.currentRefinement};

    // @ts-ignore
    onChange = (event, {newValue}) => {
        this.setState({
            value: newValue,
        });
    };

    // @ts-ignore
    onSuggestionsFetchRequested = ({value}) => {
        // @ts-ignore
        this.props.refine(value);
    };

    onSuggestionsClearRequested = () => {
        // @ts-ignore
        this.props.refine();
    };

    // @ts-ignore
    getSuggestionValue(hit) {
        return hit.name;
    }

    // @ts-ignore
    renderSuggestion(hit) {
        return <Highlight
            attribute="name"
            hit={hit}
            tagName="mark"
        />;
    }

    render() {
        console.log('this.props: ', this.props);
        // @ts-ignore
        const {hits} = this.props;
        const {value} = this.state;

        const inputProps = {
            placeholder: 'Search...',
            onChange: this.onChange,
            value,
        };

        return (
            <Autosuggest
                suggestions={hits}
                multiSection={false}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={this.getSuggestionValue}
                renderSuggestion={this.renderSuggestion}
                inputProps={inputProps}
            />
        );
    }
}
const AutoComplete = connectAutoComplete(SearchComponent);

export default Search;
