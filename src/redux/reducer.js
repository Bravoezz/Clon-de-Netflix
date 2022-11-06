 const initialState = {
    email:"",
    password:"",
    boolean:0
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
        case 'INBOOLEAN':
            return{
                ...state,
                boolean: action.payload
            }
        default:
            return{...state}
    }
}
export default Reducer; 

 