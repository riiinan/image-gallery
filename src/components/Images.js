import React, { useContext, useState, useEffect } from "react";
import { ContentContext } from "../context/ContentContext";
import Loader from "./Loader";
import Paging from './Paging'
import NoContent from "./NoContent";
import Image from "./Image";
const Images = () => {
  const { images, loading, photoSearch } = useContext(ContentContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeNumber, setActiveNumber] = useState(1)
  const [postsPerPage] = useState(250);
  useEffect(() => {
    photoSearch();
  }, [photoSearch]);
  const results = images;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = results.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);
   const handleActiveNumberChange = (number) => {
     setActiveNumber(number)
   }

  return (
    <div>
      <h2>Images</h2>
      <Paging
              postsPerPage={postsPerPage}
              totalPosts={images.length}
              paginate={paginate}
              url={'home'}
              activeNumber={activeNumber}
              handleActiveNumberChange={handleActiveNumberChange}
            />
      {loading ?
        <Loader />
        :
        (results ?
          <div className="photo-container"> <ul>{currentPosts.map(image => {
            return <Image url={image.thumbnailUrl} key={image.id} alt={image.title} id={image.id} />;
          })}</ul>
           </div> :
          <NoContent />)
      }
       <Paging
              postsPerPage={postsPerPage}
              totalPosts={images.length}
              paginate={paginate}
              url={'home'}
              activeNumber={activeNumber}
              handleActiveNumberChange={handleActiveNumberChange}
            />

    </div>
  );
};

export default Images;