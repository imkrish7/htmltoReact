import React, { Component } from 'react';
import Style from '../Styles/disscusion_topic.module.scss';

class DisscusionTopic extends Component{

	constructor(props){
		super(props);
	}

	render(){
		return <div className={Style.container}>
				<ul className={Style.list}>
					<li className={Style.list_item}>Setup</li>
					<li className={Style.list_item}>Basic Example</li>
					<li className={Style.list_item}>Mail API</li>
					<li className={Style.list_item}>Message API</li>
					<li className={Style.list_item}>Switching Connections</li>
					<li className={Style.list_item}>Drivers</li>
				</ul>
				<div className={Style.summary}>
					<p className={Style.text}>AdonisJs has first class support for sending email.</p>
					<p className={Style.text}>
						The <b>Mail Provider</b> supports a number of drivers including:
					</p>
				</div>
				<ul className={Style.drivers}>
					<li className={Style.drivers_item} >Smtp (<span>smtp</span>)</li>
					<li className={Style.drivers_item} >Spark Post (<span>sparkpost</span>)</li>
					<li className={Style.drivers_item} >Mailgun (<span>mailgun</span>)</li>
					<li className={Style.drivers_item} >Amazon SES (<span>ses</span>)</li>
				</ul>
			</div>;
	}
}

export default DisscusionTopic;