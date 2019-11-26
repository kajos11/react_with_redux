import React from 'react';
import axios from 'axios';
import { stringify } from 'querystring';
import './NewsResults.css';

export default class NewsResults extends React.Component {

    constructor(props) {
        super(props);
        debugger
    }

    state = {
        hackerNewsList: []
    }

    componentWillMount() {
        this.getHackerNews()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.newsSearch !== this.props.newsSearch) {
            this.getHackerNews();
        }
    }

    getHackerNews() {
        console.log('searching with ' + this.props.newsSearch)
        axios.get(`https://hn.algolia.com/api/v1/search?query=` + this.props.newsSearch)
            .then(result => {
                debugger
                const hackerNewsList = result.data.hits;
                this.setState({ hackerNewsList: hackerNewsList });
            })

    }

    render() {
        return (
            <ul>
                {this.state.hackerNewsList.map(news => {
                    if (news.title) {
                        return <li>
                            <a href={news.url} target="_blank">{news.title}</a>
                            </li>
                    }
                }
                )}
            </ul>
        )
    }


}