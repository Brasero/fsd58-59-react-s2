// path : revision/src/page/BlogDetail/index.page.jsx

import {useNavigate, useParams} from "react-router";

const BlogDetailPage = ({posts}) => {
 
 const navigate = useNavigate();
 
 const {id} = useParams()
 const post = posts.find((p) => p.id == id)
 
 const goBack = () => {
  navigate(-1)
 }
 
 
 
 return <div className="page" id="BlogDetail">
  <button onClick={goBack}> {"<-"} </button>
  <h3>{post.title}</h3>
  <div>
   <span>{post.description}</span> / <span>{post.content}</span>
  </div>
 </div>
}

export default BlogDetailPage