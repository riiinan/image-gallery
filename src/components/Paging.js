import React from 'react';
import {
  Pagination
} from 'react-bootstrap'

const Paging = ({ postsPerPage, totalPosts, paginate, url,activeNumber,handleActiveNumberChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }


  const activate = (number) => {
    handleActiveNumberChange(number)
    paginate(number)

  }


  return (
    <nav>
      <Pagination>
        {pageNumbers.map(number => (
            <Pagination.Item key={number} active={number === activeNumber} onClick={() => activate(number)} href={'!#' + url}>
              {number}
            </Pagination.Item>
        ))}
      </Pagination>
    </nav>
  );
};

export default Paging;