import React, { Component } from 'react';
import Style from '../Styles/side_left.module.scss';
import Menu from './Menu';
import Data from '../sideLeftMenu';

class SideLeft extends Component{

	constructor(props){
		super(props);
	}

	render(){
		return <div className={Style.container}>
				<div className={Style.search_box}>
					<select className={Style.version_select}>
						<option className={Style.option} >Version 4.1</option>
						<option className={Style.option} >Version 4.0</option>
						<option className={Style.option} >Version 3.2 (legacy)</option>
					</select>
				</div>
				<div className={Style.menu_list}>
					{Object.keys(Data).map((item, index) => {
						return <Menu key={index} title={item} list={Data[item]} />;
					})}
				</div>
			</div>;
	}
}

export default SideLeft;