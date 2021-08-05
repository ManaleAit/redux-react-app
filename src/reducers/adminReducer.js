
const initialState={
    admins: [],admin:{}
  };
// equivalnte de la methode dispatch avec l context
export default function(state=initialState,action){
    switch(action.type){
        case 'GET_ADMINS':
          return {
            ...state,
            admins:action.payload
          }
        case 'GET_ADMIN':
            return {
              ...state,
              admin:action.payload
            }
        case 'UPDATE_ADMIN':
            return {
                ...state,
                admins:state.admins.map(admin=>admin.id===action.payload.id?(admin=action.payload):admin)
              }
        case 'DELETE_ADMIN':
            return {
            ...state,
            admins:state.admins.filter(admin=>admin.id!==action.payload)
        } 
        case 'ADD_ADMIN':
            return{
                ...state,
                admins:[action.payload,...state.admins
                
                ]
            }   
        default:{
            return state;
        }
    }
}