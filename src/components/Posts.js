import React, { useContext, useState, useEffect } from "react";
import { ContentContext } from "../context/ContentContext";
import Loader from "./Loader";
import Paging from './Paging'

import NoContent from "./NoContent";
import Post from "./Post";
const Posts = () => {
    const { posts, loading, postSearch } = useContext(ContentContext);
    const [currentPage, setCurrentPage] = useState(1);
    const [activeNumber, setActiveNumber] = useState(1)
    const [postsPerPage] = useState(10);
    useEffect(() => {
        postSearch();
    }, []);
    const results = posts;
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = results.slice(indexOfFirstPost, indexOfLastPost);
  
    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
     const handleActiveNumberChange = (number) => {
       setActiveNumber(number)
     }
  
   
    return (
        <div>
            <h1>Posts</h1>
            <Paging
              postsPerPage={postsPerPage}
              totalPosts={posts.length}
              paginate={paginate}
              url={'posts'}
              activeNumber={activeNumber}
              handleActiveNumberChange={handleActiveNumberChange}
            />
            <ul>
                {loading ?
                    <Loader />
                    :
                    (results ?
                        currentPosts.map(post => <Post key={post.id} id={post.id} title={post.title} />)
                        : <NoContent />)
                }
            </ul>
            <Paging
              postsPerPage={postsPerPage}
              totalPosts={posts.length}
              paginate={paginate}
              url={'posts'}
              activeNumber={activeNumber}
              handleActiveNumberChange={handleActiveNumberChange}
            />

        </div>
    );
};

export default Posts;