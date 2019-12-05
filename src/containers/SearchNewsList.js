import NewsResults from "../components/news-results/NewsResults";
import { connect } from 'react-redux'

const mapStateToProps = state => ({
    search: state.search[state.search.length-1]
})


export default connect(
    mapStateToProps
  )(NewsResults)

