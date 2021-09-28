import React from 'react'
import PropTypes from 'prop-types'
import './index.less'

const App = (props) => {
    const { test } = props
    return (
        <div className="demo">
            <span>22222</span> <span>{test}</span>
            <div>hello</div>
        </div>
    )
}


// AHI
App.propTypes = {
    test: PropTypes.string,
}

App.defaultProps = {
    test: '您好喔',
}

export default App
