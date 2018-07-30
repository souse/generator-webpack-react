import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout, Row, Col, Icon, Badge, Menu, Dropdown, Avatar, Popover } from 'antd';
import { Link, withRouter } from 'react-router-dom';

import './index.less';

const { Header } = Layout;

@withRouter
class CommonHeader extends Component {
	constructor(props) {
	    super(props);

	    this.handleLogOut = this.handleLogOut.bind(this);
	    this.handleChangePwd = this.handleChangePwd.bind(this);
	}	

	handleChangePwd = () => {
		
	}

	handleLogOut = () => {
	    // 登出逻辑
	}

	render() {
		const { auth } = this.props;

		const menu = (
	      	<Menu>
		        <Menu.Item>
		          	<a onClick={this.handleChangePwd}>修改密码</a>
		        </Menu.Item>
		        <Menu.Item>
		          	<a onClick={this.handleLogOut}>退出</a>
		        </Menu.Item>
	      	</Menu>
	    );

	    return (
	    	<Header style={{ background: '#fff', padding: 0 }}>
	    		<Row type="flex" justify="space-between" align="middle">
					<h3>后台管理系统</h3>	
					<Col className="header-nav" span={6}>
						<Col span={3}>
							系统消息
						</Col>
						<Col span={3}>
				            <Dropdown overlay={menu}>
				              	<a className="ant-dropdown-link" href="#">
				                	{auth.name}<Icon type="down" />
				              	</a>
				            </Dropdown>
				        </Col>
					</Col>
	    		</Row>
	    	</Header>
	    )		
	}
}

export default CommonHeader;