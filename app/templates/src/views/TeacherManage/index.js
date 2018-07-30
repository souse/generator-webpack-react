import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter, matchPath } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './index.less';

class TeacherManage extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>这是老师页面</div>
		)
	}
}

export default TeacherManage;