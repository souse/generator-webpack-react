import _ from 'lodash';
import { UPDATE_NAVPATH } from '../actions/menu';

const initialState = {
	items: [
		{
			key: 1,
			name: '约课管理',
			icon: '',
			child: [
				{
					name: '教师管理',
					key: 101,
					url: '/teachermanage'
				},
				{
					name: 'Banner管理',
					key: 102,
					url: '/bannermanage'
				}
			]
		}	
	],
	navpath: []
};

const menu = (state = initialState, action = {}) => {
	switch (action.type) {
		case UPDATE_NAVPATH:
			let navpath = [], tmpOb, tmpKey, child;
			if (Array.isArray(action.payload.data)) {
				action.payload.data.reverse().map((item) => {
					if (item.indexOf('sub') != -1) {
						tmpKey = item.replace('sub', '');
						tmpOb = _.find(state.items, function(o) {
			              	return o.key == tmpKey;
			            });
			            child = tmpOb.child;
			            navpath.push({
			              	key: tmpOb.key,
			              	name: tmpOb.name
			            });	
					}
					if(item.indexOf('menu') != -1) {
						tmpKey = item.replace('menu', '');
						
						if (child) {
							tmpOb = _.find(child, function(o) {
			                	return o.key == tmpKey;
			            	});
						}	
						navpath.push({
			                key: tmpOb.key,
			                name: tmpOb.name
			            });
					}	
				})		
			}
			return Object.assign({}, state, {
	        	currentIndex: action.payload.key * 1,
	        	navpath: navpath
	      	});
	    default:
	    	return state;
	}
}

export default  menu;













