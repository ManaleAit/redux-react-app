import axios from 'axios';
export const getAdmins = () =>async dispatch=>{
    const res=await axios.get('http://localhost:8080/Admin');
  
    dispatch(
        {type:'GET_ADMINS',
         payload:res.data
        }
    ) 
}

export const getAdmin = (id) =>async dispatch=>{
    const res=await axios.get(`http://localhost:8080/Admin/${id}`);
    dispatch(
        {type:'GET_ADMIN',
         payload:res.data        }
    ) 
}
export const deleteAdmin = (id) => dispatch=>{
   //c'est promise si on applique async et await on vas mettre try catch
    axios.delete(`http://localhost:8080/Admin/${id}`).then(res=>{
        dispatch({
            type:'DELETE_ADMIN',
            payload:id
        })
    }).catch(err=>{
        alert(err)
    });
 
}
export const addAdmin = (admin) =>async dispatch=>{
    const res=await axios.post('http://localhost:8080/Admin',admin);

    dispatch({
        type:'ADD_ADMIN',
        payload:res.data
    })
}

export const updateAdmin = (admin) =>async dispatch=>{
    const res=await axios.put(`http://localhost:8080/Admin/${admin.id}`,admin);
    
    dispatch({
        type:'UPDATE_ADMIN',
        payload:res.data
    })
}
