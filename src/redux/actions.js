 export function inEmail (info){
    return {type: 'INEMAIL', payload: info}
}
export function inPassword (info){
    return {type: 'INPASSWORD', payload: info}
} 
export function inBoolean (info){
    return {type: 'INBOOLEAN', payload: info}
}