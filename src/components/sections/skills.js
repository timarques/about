import React, {Component} from 'react'
class Skill extends Component{
	render()
	{
        const style = {
            width: this.props.value + "%"
        }
		return (
            <div className="skill col-md-6 col-sm-12">
                <div className="title">
                    <i className={"devicon-"+this.props.icon}></i>{this.props.title}
                </div>
                <div className="progress">
                    <div className="progress-bar" role="progressbar" aria-valuenow={this.props.value} aria-valuemin="0" aria-valuemax="100" style={style}></div>
                </div>
            </div>
		)
	}
}
class Skills extends Component{
	render()
	{
		const skills = this.props.data.skills.map((skill, index)=>{
			return (
				<Skill key={index} icon={skill.icon} value={skill.value} title={skill.title}></Skill>
			)
		})
		return (
            <div className="row">
				<h2>{this.props.data.title}</h2>
				<div className="row col-12">
                	{skills}
				</div>
            </div>
		)
	}
}
export default Skills
