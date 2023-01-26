import React, { FC } from 'react';
import classnames from 'classnames';
import { usePagination, DOTS } from '../../../hooks/usePaginate';
import { v4 as uuidv4 } from 'uuid';

interface PaginateProps {
  onPageChange?: (count: number) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
  className: string;
}

const Pagination: FC<PaginateProps> = ({
  onPageChange = () => {},
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  className
}) => {
  const paginationRange: any = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul
      className={classnames('pagination-container ', {
        [className]: className
      })}
    >
      <li
        className={classnames('pagination-item ', {
          disabled: currentPage === 1
        })}
        onClick={onPrevious}
      >
        <div className="arrow left " />
      </li>
      {paginationRange.map((pageNumber: any) => {
        if (pageNumber === DOTS) {
          return (
            <li
              className="pagination-item dots dark:text-neutral-300 hover:text-black dark:hover:text-white"
              key={uuidv4()}
            >
              &#8230;
            </li>
          );
        }

        return (
          <li
            className={classnames(
              'pagination-item dark:text-neutral-300 hover:text-black dark:hover:text-white',
              {
                selected: pageNumber === currentPage
              }
            )}
            onClick={() => onPageChange(pageNumber)}
            key={uuidv4()}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={classnames('pagination-item', {
          disabled: currentPage === lastPage
        })}
        onClick={onNext}
      >
        <div className="arrow right" />
      </li>
    </ul>
  );
};

export default Pagination;
