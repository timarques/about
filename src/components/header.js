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
        return(
            <header className="App-header">
                <nav id="menu">
                    <ul>
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
