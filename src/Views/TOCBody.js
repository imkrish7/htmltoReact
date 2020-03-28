import React, { Component } from 'react';
import Style from '../Styles/toc_body.module.scss';
class TOCBody extends Component{

	constructor(props){
		super(props);
	}

	render(){
		return <div className={Style.container}>
				<div className={Style.section}>
					<div className={Style.sub_header}>
						<h2 className={Style.sub_header_text}>
							<span className={Style.hash}>#</span> Setup
						</h2>
					</div>
					<div className={Style.content}>
						<p className={Style.content_text}>
							As the Mail Provider is not installed by default, we need to pull it from npm:
						</p>
						<pre className={Style.code}>
							<code>> adonis install @adonisjs/mail</code>
						</pre>
					</div>
				</div>
			</div>;
	}
}

export default TOCBody;