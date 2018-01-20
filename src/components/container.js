import React, {Component} from 'react'
import Home from './sections/home'
import About from './sections/about'
import Skills from './sections/skills'
import Projects from './sections/projects'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
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
						<ReactCSSTransitionGroup
							transitionName="section"
							transitionEnterTimeout={500}
							transitionLeaveTimeout={300}>
							<Section data={this.props.data}></Section>
						</ReactCSSTransitionGroup>
					</section>
			</div>
		)
	}
}
export default Container
