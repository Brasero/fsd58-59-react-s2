// path : social-post/src/pages/AddPost/index.page.jsx
import "./style.scss";
import {useDispatch, useSelector} from "react-redux";
import {selectPostIsPosting, selectPostValue} from "../../store/selector/post-selector.js";
import {addPost, setPostValue} from "../../store/slice/postSlice.js";
import Loader from "../../component/Loader/index.jsx";
import {useState} from "react";
import {useNavigate} from "react-router";

const AddPostPage = () => {
 
 const dispatch = useDispatch()
 const post = useSelector(selectPostValue)
 const isPosting = useSelector(selectPostIsPosting)
 const [error, setError] = useState("")
 const navigate = useNavigate()
 
 const handleChange = (e) => {
  const {name, value} = e.target
  dispatch(setPostValue({name, value}));
  setError("")
 }
 
 const handleSubmit = (e) => {
  e.preventDefault()
  if (!post.title || !post.body) {
   setError("Merci de remplir tous les champs")
   return
  }
  dispatch(addPost(post))
  navigate(-1)
 }
 
 if (isPosting) return <div className="page" id="AddPost">
  <h2 className={"AddPost__title"}>Ajouter un post</h2>
  <Loader />
 </div>
 
 return <div className="page" id="AddPost">
  <h2 className={"AddPost__title"}>Ajouter un post</h2>
  <form className={"AddPost__form"} onSubmit={handleSubmit}>
   <input className={"AddPost__form__input"} type="text" onChange={handleChange} value={post.title} name={"title"} placeholder={"Titre"} />
   <textarea className={"AddPost__form__textarea"} name={"body"} onChange={handleChange} value={post.body} placeholder={"Contenu"} />
   <button role={"button"} className={"AddPost__form__button"}>Envoyer</button>
   {error && <p style={{color: "darkred"}}>{error}</p>}
  </form>
 </div>
}

export default AddPostPage