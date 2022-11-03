 const initialState = {
    email:"",
    password:""
}

function Reducer (state = initialState, action){

    switch (action.type) {
        case 'INEMAIL':
            return {
                ...state,
                email: action.payload
            };
        case 'INPASSWORD': 
            return {
                ...state,
                password: action.payload
            }

        default:
            return{...state}
    }
}
export default Reducer; 

 