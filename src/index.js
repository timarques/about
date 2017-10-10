import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import './styles/font-awesome.css'
import 'bootstrap-css-only'
import './styles/devicon.css'
import './styles/style.css'
import data from './data.json'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App data={data}/>, document.getElementById('root'))
registerServiceWorker()
