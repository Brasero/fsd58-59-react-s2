// path : revision/src/page/BlogList/index.page.jsx

import {Link} from "react-router";

const BlogListPage = () => {
 
 return <div className="page" id="BlogList">
  <h2>Articles de blog</h2>
  <Link to={"/blog/25"}>Article 25</Link>
 </div>
}

export default BlogListPage