import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import './font-awesome.css'
import 'bootstrap-css-only'
import 'devicon'
import './style.css'
import data from './data.json'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App data={data}/>, document.getElementById('root'))
registerServiceWorker()
