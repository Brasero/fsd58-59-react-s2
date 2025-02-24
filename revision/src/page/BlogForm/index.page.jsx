// path : revision/src/page/BlogForm/index.page.jsx

import {useNavigate} from "react-router";

const BlogFormPage = ({post, change, reset, submit}) => {
 
 const navigate = useNavigate()
 
 const handleChange = (e) => {
  const {name, value} = e.target
  change(name, value)
 }
 
 const handleSubmit = (e) => {
  e.preventDefault()
  submit();
  navigate(-1)
 }
 
 
 return <form onSubmit={handleSubmit} className="page" id="BlogForm">
  <div>
   <label>Titre</label>
   <input type={"text"} name={"title"} value={post.title} onChange={handleChange}/>
  </div>
  <div>
   <label>Déscription</label>
   <textarea name={"description"} value={post.description} onChange={handleChange} />
  </div><div>
   <label>Contenu</label>
   <textarea name={"content"} value={post.content} onChange={handleChange}/>
  </div>
  <input type={"submit"} value={"ajouter"} />
 </form>
}

export default BlogFormPage