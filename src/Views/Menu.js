import React , { Component } from 'react';
import Style from '../Styles/menu.module.scss';
class Menu extends Component{

	constructor(props){
		super(props);
	}

	render(){ 
		return(
			<div className={Style.menu}>
				<div className={Style.header}>{this.props.title}</div>
				<ul className={Style.list}>
						{ this.props.list.map((item, index)=> <li key={index} className={Style.list_item}>{item}</li>)}
				</ul>
			</div>
		)
	}
}

export default Menu;