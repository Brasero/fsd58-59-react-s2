import {useReducer} from "react";

const initialState = {
 data: [
  {id : 1, title : "MySQL", description : "blabla", content : ""},
  {id : 2, title : "PHP", description : "blabla", content : ""},
  {id : 3, title : "React", description : "blabla", content : ""},
 ],
 post: {
  title: "",
  description: "",
  content: ""
 }
}

const generateId = (data) => {
 const lastHigherId = data.reduce((acc, curr) => {
  if (curr.id > acc) {
   return curr.id
  }
  return acc
 }, 0)
 return lastHigherId + 1
}


const reducer = (state, action) => {
 
 switch(action.type) {
  
  case "CHANGE_POST":
   return {
    ...state,
    post: {
     ...state.post,
     [action.payload.name]: action.payload.value
    }
   }
   
  case "RESET_POST":
   return {
    ...state,
    post: {
     ...state.post,
     title: "",
     description: "",
     content: ""
    }
   }
   
  case "ADD_POST":
   return {
    ...state,
    data: state.data.concat([{...state.post, id: generateId(state.data)}]),
    post: {
     ...state.post,
     title: "",
     description: "",
     content: ""
    }
   }
  
  default:
   return state;
 }
}

const usePostReducer = () => {
 const [state, dispatch] = useReducer(reducer, initialState)
 
 const changePost = (name, value) => {
  dispatch({
   type: "CHANGE_POST",
   payload: {
    name,
    value
   }
  })
 }
 
 const resetPost = () => {
  dispatch({
   type: "RESET_POST"
  })
 }
 
 const addPost = () => {
  dispatch({
   type: "ADD_POST"
  })
 }
 
 return {
  state,
  resetPost,
  changePost,
  addPost
 }
}

export default usePostReducer