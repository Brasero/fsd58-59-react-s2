


export const selectCount = (state) => state.counter.count;
export const startCounter = () => {
    return dispatch => {
        setInterval(() => {
            dispatch({type: INCREMENT})
        }, 1000)
    }
}

const INCREMENT = "INCREMENT"

const initialState = {
    count: 0
};

const CounterReducer = (state = initialState, action) => {
	switch (action.type) {
		
     case INCREMENT:
         return {
             ...state,
             count: state.count + 1
         }
     
     
		default:
			return state;
	}
};



export default CounterReducer;