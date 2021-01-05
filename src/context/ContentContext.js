import React, { createContext, useState } from "react";
import axios from "axios";
export const ContentContext = createContext();

const ContentContextProvider = props => {
  const [images, setImages] = useState([]);
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true);
  const photoSearch = () => {
    axios
      .get(
        `http://jsonplaceholder.typicode.com/photos`
      )
      .then(response => {
        setImages(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.log(
          error
        );
      });
  };
  const postSearch = () => {
    axios
      .get(
        `http://jsonplaceholder.typicode.com/posts`
      )
      .then(response => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.log(
          error
        );
      });
  };
  return (
    <ContentContext.Provider value={{ images,posts, postSearch, loading, photoSearch }}>
      {props.children}
    </ContentContext.Provider>
  );
};

export default ContentContextProvider;