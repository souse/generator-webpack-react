import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '@/views/Layout';
import Login from '@/views/Login';

import TeacherManage from '@/views/TeacherManage';


export const childRoutes = [
	{
		path: '/teachermanage',
		component: TeacherManage,
		'exactly': true
	}	
];

const routes = (
  	<Switch>
    	<Route path="/login" component={ Login }/>
    	<Route path="/" component={ Layout }/>
  	</Switch>
);

export default routes