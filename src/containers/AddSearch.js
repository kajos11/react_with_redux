import React from 'react'
import { connect } from 'react-redux'
import { addSearchQuery } from '../actions'

const AddSearch = ({dispatch}) => {
    let input

    return (
        <div>
            <input ref={node => (input = node)} />
            <button type="submit" 
             onClick={e=>{dispatch(addSearchQuery(input.value))}}>Search</button>

        </div>
    )


}


export default connect()(AddSearch)