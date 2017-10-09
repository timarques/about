import React, {Component} from 'react'
import ListItem from './list-item'
class Header extends Component{
    shouldComponentUpdate(nextProps){
        return nextProps.current !== this.props.current
    }
    render(){
        let menuItems = []
		Object.keys(this.props.data.menu.items).forEach((key, index) =>{
            const item = this.props.data.menu.items[key]
			menuItems.push (
                <ListItem id={key} key={key} data={{current: this.props.current.section, icon:item.icon, text: item.text}} handleClick={this.props.actions.menuListItemClick}></ListItem>
            )
		})
        if(this.props.dimensions.width > 576)
        {
            
        }
        return(
            <header className="App-header">
                <button className="d-sm-none btn btn-dark m-1" onClick={()=>this.toggleMenu()}><i className="fa fa-bars" aria-hidden="true"></i></button>
                <nav id="menu" className="d-none d-sm-block">
                    <ul className="list-group">
                        <div className="menu-items">
                            {menuItems}
                        </div>
                    </ul>
                </nav>
            </header>
        )
    }
}
export default Header
