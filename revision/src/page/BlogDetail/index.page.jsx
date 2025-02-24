// path : revision/src/page/BlogDetail/index.page.jsx

import {useParams} from "react-router";

const BlogDetailPage = () => {
 
 const {id} = useParams()
 

 
 return <div className="page" id="BlogDetail">
    <h2>Détail de l'article {id}</h2>
 </div>
}

export default BlogDetailPage