import React, {Component} from 'react'
class ListItem extends Component{
    handleClick()
    {
        this.props.handleClick(this.props.id)
    }
    getActive()
    {
        return (this.props.data.current === this.props.id ? "active":"")
    }
    render(){
        return(
            <li className={"list-group-item " + this.getActive()} onClick={()=>this.handleClick()}>
            	<i className={("fa "+this.props.data.icon)} aria-hidden="true"></i>
            	{this.props.data.text}
            </li>
        )
    }
}
export default ListItem
