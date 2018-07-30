const { NODE_ENV } = process.env;
let baseURI = '';

if (NODE_ENV == 'development') {
	baseURI = 'http://test.shbaoyuantech.com/zhaosheng/yueke';
} else {
	baseURI = 'http://zhaosheng.uat.shbaoyuantech.com/yueke';
}

export default baseURI;
