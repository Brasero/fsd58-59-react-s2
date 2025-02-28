// path : social-post/src/pages/Home/index.page.jsx
import "./style.scss";
import {useSelector} from "react-redux";
import {
 selectPostsData,
 selectPostsErrorMessage,
 selectPostsErrorStatus,
 selectPostsLoadingStatus
} from "../../store/selector/post-selector.js";
import PostItem from "../../component/PostItem/index.jsx";
import Loader from "../../component/Loader/index.jsx";

const HomePage = () => {
 
 const isLoading = useSelector(selectPostsLoadingStatus)
 const isErrored = useSelector(selectPostsErrorStatus)
 const errorMessage = useSelector(selectPostsErrorMessage)
 const posts = useSelector(selectPostsData)
 
 
 if (isLoading) return <div className="page" id="Home"><Loader /></div>
 if (isErrored) return <div className="page" id="Home">{errorMessage}</div>
 
 return <div className="page" id="Home">
  <h2>Fil d'actualité</h2>
  <div className={"Home__posts"}>
  {[...posts].reverse().map(post => {
   return <PostItem post={post} key={post.id}/>
  })}
  </div>
 </div>
}

export default HomePage