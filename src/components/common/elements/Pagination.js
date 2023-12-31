import React, { useEffect, useState } from "react";
import "../../../styles/Pagination.css";
import ReactPaginate from "react-paginate";

const Pagination = ({ items, itemsPerPage, setCurrentItems }) => {
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <ReactPaginate
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel=""
        pageClassName="container-horizontal pagination__item"
        pageLinkClassName="subtitle pagination__item__link"
        previousClassName="pagination__button"
        previousLinkClassName="subtitle pagination__button__link pagination__button__link_previous"
        nextClassName="pagination__button"
        nextLinkClassName="subtitle pagination__button__link"
        breakLabel="..."
        breakClassName="container-horizontal pagination__item"
        breakLinkClassName="subtitle pagination__item__link"
        containerClassName="container-horizontal pagination"
        activeClassName="pagination__item pagination__item_active"
        disabledClassName="pagination__button_disabled"
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default Pagination;
