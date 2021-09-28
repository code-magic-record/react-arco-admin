import React from 'react'
import PropTypes from 'prop-types'
import './index.less'

const App = (props) => {
    const { test } = props
    return (
        <div className="demo">
            <div>hello</div>
            <div>{test}</div>
        </div>
    )
}
App.propTypes = {
    test: PropTypes.string,
}

App.defaultProps = {
    test: '您好喔',
}

export default App
