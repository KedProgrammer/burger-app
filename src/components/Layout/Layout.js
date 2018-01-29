import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliar'
import classes from './Layout.css'
import Toolbar from  '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Menu from '../Navigation/Menu/Menu'
class  Layout extends Component {

	state = {
		showSiderDrawer: false
	}
	sideDraweCloseHandler = () => {
		this.setState({showSiderDrawer: false});
	}

	toggleMenu = () => {
		let show = this.state.showSiderDrawer
		show = !show
		this.setState({showSiderDrawer: show })
	}
	render () {

		return (
			<Aux>
				<Toolbar toggle={this.toggleMenu} />
				<SideDrawer open={this.state.showSiderDrawer} closed={this.sideDraweCloseHandler} />
				<main className={classes.Content}>
					{this.props.children}
				</main>
			</Aux>
			)
	}
}

export default Layout;