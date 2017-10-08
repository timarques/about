import React, {Component} from 'react'
class Link extends Component{
	render()
	{
		return (
			<a className="btn" href={this.props.href} target="_blank" title={this.props.title}>
				<i className={"fa "+this.props.icon} aria-hidden="true"></i>
			</a>
		)
	}
}
class Home extends Component{
	render()
	{
		const links = this.props.data.links.map((link, index)=>{
			return (
				<Link key={index} href={link.href} title={link.title} icon={link.icon}></Link>
			)
		})
		return (
			<div className="row">
				<div className="center">
	                <h1 className="title">{this.props.data.name}</h1>
	                <div className="sub-title lead job">{this.props.data.job}</div>
					<div className="btn-group btn-group-lg links" role="group">{links}</div>
	            </div>
			</div>
		)
	}
}
export default Home
