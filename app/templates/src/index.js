import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';

import configStore from './store';
import route from './route';
import { addItem } from '@/utils';

const store = configStore();

//for dev
addItem('USER', { name: '叶良成' });

render(
	<AppContainer>
  		<Provider store={ store }>
    		<Router children={ route } />
  		</Provider>
  	</AppContainer>,
  	document.getElementById('root')
);

