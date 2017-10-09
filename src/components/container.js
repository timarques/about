import React, {Component} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Home from './sections/home'
import About from './sections/about'
import Skills from './sections/skills'
import Projects from './sections/projects'
const components = {home: Home, about: About, skills: Skills, projects: Projects}
class Container extends Component{
	shouldComponentUpdate(nextProps)
	{
		return nextProps.data !== this.props.data
	}
	render()
	{
		const Section = components[this.props.section]
		return(
			<div className="container-fluid">
					<section id={this.props.section}>
						<Section data={this.props.data}></Section>
					</section>
			</div>
		)
	}
}
export default Container
