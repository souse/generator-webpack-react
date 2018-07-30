import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Form, Input, Button, Row, Col, Icon, message } from 'antd'

import { setUser } from '@/store/actions/auth';
import './index.less';

const FormItem = Form.Item

@withRouter
class Login extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			loading: false
		}
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		const data = this.props.form.getFieldsValue();

		this.setState({ loading: true });
		
	}

	render() {
		const { getFieldDecorator } = this.props.form

		return (
			<Row className="login-row" type="flex" justify="space-around" align="middle">
				<Col className="login-box">
					<Form 
						layout="horizontal" 
						className="login-form"
						onSubmit={this.handleSubmit} >
						<FormItem>
			              	{getFieldDecorator('name')(
			                	<Input prefix={<Icon type="name" style={{ fontSize: 13 }} />} placeholder='admin' />
			              	)}
			            </FormItem>
			            <FormItem>
			              	{getFieldDecorator('password')(
			                	<Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type='password' placeholder='123456' />
			              	)}
			            </FormItem>
			            <p>
			              	<Button 
			              		className="btn-login" 
			              		type='primary' 
			              		size="large" 
			              		icon="poweroff" 
			              		loading={this.state.loading} 
			              		htmlType='submit' >
			              		登录
			              	</Button>
			            </p>
					</Form>	
				</Col>			
			</Row>
		)
	}
}

Login.propTypes = {
  	auth: PropTypes.object
};

Login = Form.create()(Login);

const mapStateToProps = (state) => {
  	const { auth } = state;

  	return {
    	auth: auth ? auth : null
  	};	
};

const mapDispatchToProps = (dispatch) => {
  	return bindActionCreators({ setUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);