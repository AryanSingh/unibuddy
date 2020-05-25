const initialState =  {
	frequencyTable: {}
};


const reducer = (state = { ...initialState }, action) => {
	console.log('reducer action', action);
	switch (action.type) {
		case 'FREQUENCY_TABLE':
			return { ...state, frequencyTable: action.data };
		case 'DATA_FETCHING':
			return { ...state, loading: true };
		// case 'NEWS_RECEIVED':
		// 	return { ...state, news: action.json[0], loading: false }
		case 'BILL_CREATE':
			return { ...state, data: [...state.data, action.data] };
		case 'BILL_EDIT':
			let duplicateArr = [...state.data];
			debugger;
			duplicateArr.splice(action.data.id - 1, 1, action.data);
			console.log('duplicateArr', duplicateArr);
			return { ...state, data: duplicateArr };
		default:
			return state;
	}
};
export default reducer;


