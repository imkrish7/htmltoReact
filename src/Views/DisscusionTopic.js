import React, { Component } from 'react';
import Style from '../Styles/disscusion_topic.module.scss';

class DisscusionTopic extends Component{

	constructor(props){
		super(props);
	}

	render(){
		return <div className={Style.container}>
				<ul className={Style.list}>
					<li className={Style.list_item} >Setup</li>
					<li className={Style.list_item} >Basic Example</li>
					<li className={Style.list_item} >Mail API</li>
					<li className={Style.list_item} >Message API</li>
					<li className={Style.list_item} >Switching Connections</li>
					<li className={Style.list_item} >Drivers</li>
				</ul>
			</div>;
	}
}

export default DisscusionTopic;