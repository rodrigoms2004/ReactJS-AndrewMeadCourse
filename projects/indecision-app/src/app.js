// yarn run serve
// yarn run build

import React from 'react'
import ReactDOM from 'react-dom'


// const template = React.createElement('p', {}, 'testing 123')
const template = <p>THIS IS JSX FROM WEBPACK</p>

ReactDOM.render(template, document.getElementById('app'))