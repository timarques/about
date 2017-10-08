import React, {Component} from 'react'
class Project extends Component{
	render()
	{
		return (
			<div className="project col-lg-6 col-xl-4">
				<a href="#">
					<img className="img-responsive" src={this.props.image} alt={this.props.title} />
				</a>
			</div>
		)
	}
}
class Projects extends Component{
	render()
	{
		const projects = this.props.data.projects.map((project, index)=>{
			return (
				<Project key={index} href={project.href} title={project.title} image={project.image}></Project>
			)
		})
		return (
			<div className="row">
				<h2>{this.props.data.title}</h2>
				<div className="row col-12">
					{projects}
				</div>
			</div>
		)
	}
}
export default Projects
