'use client';

import ReactPaginate from 'react-paginate';

import css from './Pagination.module.css';

type PaginationProps = {
  pageCount: number;
  forcePage: number;
  onPageChange: (selectedPage: number) => void;
};

type SelectedItem = {
  selected: number;
};

const Pagination = ({ pageCount, forcePage, onPageChange }: PaginationProps) => {
  const handlePageClick = ({ selected }: SelectedItem): void => {
    onPageChange(selected + 1);
  };

  return (
    <ReactPaginate
      pageCount={pageCount}
      forcePage={forcePage}
      onPageChange={handlePageClick}
      containerClassName={css.pagination}
      activeClassName={css.active}
      previousLabel="<"
      nextLabel=">"
      breakLabel="..."
      marginPagesDisplayed={1}
      pageRangeDisplayed={3}
    />
  );
};

export default Pagination;
