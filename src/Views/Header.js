import React, { Component } from 'react';
import Style from '../Styles/header.module.scss';
class Header extends Component{


	render(){
		return <header className={Style.header}>
				<div className={Style.logo}>
					<b>Adonis</b>
				</div>
				<div className={Style.search_box}>
					<input className={Style.search} placeholder="Search docs" />
				</div>
				<nav className={Style.nav}>
					<ul className={Style.list}>
						<li className={Style.list_item}>Quick Start</li>
						<li className={Style.list_item}>Guides</li>
						<li className={Style.list_item}>Recipes</li>
						<li className={Style.list_item}>Sponsers</li>
						<li className={Style.list_item}>Community</li>
						<li className={Style.list_item}>
							<i className="fa fa-github" />
						</li>
					</ul>
				</nav>
			</header>;
	}
}

export default Header;