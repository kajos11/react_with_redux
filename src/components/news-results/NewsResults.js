import React from 'react';
import axios from 'axios';
import { stringify } from 'querystring';
import './NewsResults.css';



const NewsResults = (search)=>{
    debugger
    const { list, error } = useHttpListCall(search);
    return (
        <div>
            { list && (
             <ul>
                {list.map(news => {
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
      </div>  
    )

}

function useHttpListCall(searchTerm) {
    const [list, setData] = React.useState(null);
    const [error, setError] = React.useState(null);
    let searchVal = searchTerm ? searchTerm.search ? searchTerm.search.text : '' : ''
    React.useEffect(() => {
        axios
            .get(`https://hn.algolia.com/api/v1/search?query=` + searchVal)
            .then(function (response) {
                setData(response.data.hits);
            })
            .catch(function (error) {
                setError(error);
            })
    }, [`https://hn.algolia.com/api/v1/search?query=` + searchVal]);
    return { list, error };
};

function getHackerNews(searchTerm) {
    debugger
    if(searchTerm && searchTerm.search && searchTerm.search.text){
        axios.get(`https://hn.algolia.com/api/v1/search?query=` + searchTerm.search.text)
            .then(result => {
                const hackerNewsList = result.data.hits;
                return (
                    <div>
                         <ul>
                            {hackerNewsList.map(news => {
                                if (news.title) {
                                    return <li>
                                        <a href={news.url} target="_blank">{news.title}</a>
                                    </li>
                                }
                            }
                            )}
                         </ul>
                  </div>  
                )
            })

    }
    return (<div>Nothing to Display yet</div>)

}


export default NewsResults

// export default class NewsResults extends React.Component {

//     constructor(props) {
//         super(props);
        
//     }

//     state = {
//         hackerNewsList: []
//     }

//     componentWillMount() {
//         this.getHackerNews()
//     }

//     componentDidUpdate(prevProps) {
//         if (prevProps.newsSearch !== this.props.newsSearch) {
//             this.getHackerNews();
//         }
//     }

//     getHackerNews() {
//         console.log('searching with ' + this.props.newsSearch)
//         axios.get(`https://hn.algolia.com/api/v1/search?query=` + this.props.newsSearch)
//             .then(result => {
//                 const hackerNewsList = result.data.hits;
//                 this.setState({ hackerNewsList: hackerNewsList });
//             })

//     }

//     render() {
//         return (
//             <ul>
//                 {this.state.hackerNewsList.map(news => {
//                     if (news.title) {
//                         return <li>
//                             <a href={news.url} target="_blank">{news.title}</a>
//                             </li>
//                     }
//                 }
//                 )}
//             </ul>
//         )
//     }


// }