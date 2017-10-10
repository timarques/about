import React, {Component} from 'react'
class Project extends Component{
	render()
	{
		return (
			<div className="project col-lg-6">
				<div className="body">
					<a href={this.props.data.href}><h4>{this.props.data.title}</h4></a>
					<p>{this.props.data.text}</p>
				</div>
			</div>
		)
	}
}
class Projects extends Component{
	render()
	{
		const projects = this.props.data.projects.map((project, index)=>{
			return (
				<Project key={index} data={{href: project.href, title: project.title, text: project.text, image: project.image}}></Project>
			)
		})
		return (
			<div className="row">
				<h2>{this.props.data.title}</h2>
				<div className="row">
					{projects}
				</div>
			</div>
		)
	}
}
export default Projects
