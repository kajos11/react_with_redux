
import React from 'react';
import './SearchPage.css';
import NewsResult from '../news-results/NewsResults'

export default class SearchPage extends React.Component {


    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.searchChange = this.searchChange.bind(this);
    }

    searchChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <div>
                <h2>Hacker News Search</h2>
                <div id="searchForm">
                    <form onSubmit={this.searchSubmit}>
                        <label>
                            Search: <input type="text" value={this.state.value} onChange={this.searchChange} />
                        </label>
                    </form>
                </div>
                <NewsResult newsSearch={this.state.value}/>

            </div>

        );
    }

}