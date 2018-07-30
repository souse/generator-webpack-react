import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Layout, Affix , Row, Col } from 'antd';
import { Route, Redirect } from 'react-router-dom';

import { childRoutes } from '@/route';
import { getItem } from '@/utils';
import authHOC from '@/utils/auth';

import NavPath from '@/components/NavPath';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
//import Footer from '@/components/Footer';
import { logout } from '@/store/actions/auth';

const { Content } = Layout;

class App extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
	    const {actions} = this.props;
	    
	    console.log(this.props);
	}

	render() {
		const { navpath, logout } = this.props;
		const USER = getItem('USER');

		return (
			<Layout className="ant-layout-has-sider" >
	        	<Sidebar />
		        <Layout>
		        	<Header auth={USER} logout={logout} />
		        	<Content style={{ margin: '0 16px' }}>
		        		<NavPath data={navpath} />
		        		<div style={{ minHeight: 360 }}>
		        			{childRoutes.map((route, index) => (
				                <Route key={index} path={route.path} component={authHOC(route.component)} exactly={route.exactly} />
				            ))}	
		        		</div>		
		        	</Content>		
		        </Layout>
	      	</Layout>	
		)
	}
}

App.propTypes = {
  	auth: PropTypes.object,
  	navpath: PropTypes.array
};

const mapStateToProps = (state) => {
  	const { auth, menu } = state;

  	return {
    	auth: auth ? auth : null,
    	navpath: menu.navpath
  	};	
};

const mapDispatchToProps = (dispatch) => {
  	return bindActionCreators({ logout }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);











