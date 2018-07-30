export const UPDATE_NAVPATH = 'UPDATE_NAVPATH';

export const updateNavPath = (path, key) => {
	return {
		type: UPDATE_NAVPATH,
		payload: {
			data: path,
			key: key
		}
	}
}