import React, { Component } from 'react';
import Style from '../Styles/content.module.scss';
import DisscusionTopic from './DisscusionTopic';
import TOCBody from './TOCBody';

class Content extends Component{

	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className={Style.container}>
				<div className={Style.header}>
					<h1 className={Style.header_text}>Mail</h1>
				</div>
				<DisscusionTopic />
				<TOCBody />
			</div>
		)
	}
}

export default Content;