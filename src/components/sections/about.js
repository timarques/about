import React, {Component} from 'react'
class Field extends Component{
    render(){
        return (
            <div className="list-group-item">
                <b>{this.props.name}:</b> {this.props.content}
            </div>
        )
    }
}
class About extends Component{
	render()
	{
		const fields = this.props.data.fields.map((field, index)=>{
			return (
				<Field key={index} name={field.name} content={field.content}></Field>
			)
		})
		return (
            <div className="row">
                <h2>{this.props.data.title}</h2>
                <div className="row col-12">
                    <div className="col-lg-3" style={{marginBottom:"1rem"}}>
                        <img className="img-fluid" alt={this.props.data.name} src={this.props.data.image} />
                    </div>
                    <div className="col-lg-9">
                        <div className="list-group">{fields}</div>
                    </div>
                </div>
            </div>
		)
	}
}
export default About
