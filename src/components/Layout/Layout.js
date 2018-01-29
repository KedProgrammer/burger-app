import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliar'
import classes from './Layout.css'
import Toolbar from  '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
class  Layout extends Component {

	state = {
		showSiderDrawer: true
	}
	sideDraweCloseHandler = () => {
		this.setState({showSiderDrawer: false});
	}

	render () {

		return (
			<Aux>
				<Toolbar />
				<SideDrawer open={this.state.showSiderDrawer} closed={this.sideDraweCloseHandler} />
				<main className={classes.Content}>
					{this.props.children}
				</main>
			</Aux>
			)
	}
}

export default Layout;