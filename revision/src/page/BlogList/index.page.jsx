// path : revision/src/page/BlogList/index.page.jsx

import Lien from "../../component/Lien.jsx";
import {Outlet} from "react-router";

const BlogListPage = ({posts}) => {
 
 return <div className="page" id="BlogList">
  <ul style={{
   display: "flex",
   flexDirection: "column"
  }}>
   {posts.map(post => <Lien to={`blog/${post.id}`} label={post.title} />)}
  </ul>
  <Outlet />
 </div>
}

export default BlogListPage