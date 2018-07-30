import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, matchPath } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

import { updateNavPath } from '@/store/actions/menu';
import './index.less';

const SubMenu = Menu.SubMenu;
const { Sider } = Layout;

const defaultProps = {
  	items: []
}

const propTypes = {
  	items: PropTypes.array
}

const isActive = (path, history) => {
  	return matchPath(path, {
    	path: history.location.pathname,
    	exact: true,
    	strict: false
  	})
}

@withRouter
class Sidebar extends React.Component {
	state = {
	    openKey: 'sub1',
	    activeKey: 'menu101',
	    mode: 'inline'
	}	

	componentWillReceiveProps(nextProps) {
		Array.isArray(nextProps.items) && nextProps.items.map((item, i) =>{
			Array.isArray(item.child) && item.child.map((node) => {
		        if(node.url && isActive(node.url, this.props.history)){
		          	this.menuClickHandle({
		            	key: 'menu' + node.key,
		            	keyPath: ['menu' + node.key, 'sub' + item.key]
		          	})
		        }
		    })	
		})	
	}

	menuClickHandle = (item) => {
	    this.setState({
	      	activeKey: item.key
	    });
	    this.props.updateNavPath(item.keyPath, item.key);
	}

	render() {
		const { items, updateNavPath, history } = this.props;
    	let { activeKey, openKey } = this.state;	

    	const _menuProcess = (nodes, pkey) => {
    		return Array.isArray(nodes) && nodes.map((item, i) =>{
    			const menu = _menuProcess(item.child, item.key);
		        if(item.url && isActive(item.url, history)){
		          	activeKey = 'menu' + item.key;
		          	openKey = 'sub' + pkey;
		        }

		        if (menu.length > 0) {
		        	return (
			            <SubMenu
			              	key={'sub'+item.key}
			              	title={<span><Icon type={item.icon} /><span className="nav-text">{item.name}</span></span>}
			            >
			              {menu}
			            </SubMenu>
		          	)
		        } else {
		          return (
		            <Menu.Item key={'menu'+item.key}>
		              {
		                item.url ? <Link to={item.url}>{item.icon && <Icon type={item.icon} />}{item.name}</Link> : <span>{item.icon && <Icon type={item.icon} />}{item.name}</span>
		              }
		            </Menu.Item>
		          )
		        }
    		}) 
    	}
    	const menu = _menuProcess(items);

    	return (
    		<Sider
    			style={{ background: '#fff' }} >
		        <div className="ant-layout-logo">LOGO</div>
		        <Menu
		          	mode={this.state.mode} 
		          	selectedKeys={[activeKey]}
		          	defaultOpenKeys={[openKey]}
		          	onClick={this.menuClickHandle}
		        >
		          	{ menu }
		        </Menu>
		    </Sider>
    	)
	}
}

Sidebar.propTypes = propTypes;
Sidebar.defaultProps = defaultProps;

const mapStateToProps = (state) => {
	return {
		items: state.menu.items	
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
	    updateNavPath: bindActionCreators(updateNavPath, dispatch)
	}	
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);





















