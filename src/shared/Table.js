import React, { useEffect, useMemo } from "react";
import { useTable, usePagination } from "react-table";
import NoData from "./NoData";
import { IconArrowLeft, IconArrowRight } from "assets/svgs";

const Table = ({
  columns,
  data,
  type,
  onNextPageClick,
  fetchNextPage,
  fetchPrevPage,
  disabledPrevBtn,
  currentPage,
  limit,
  total,
}) => {
  data = useMemo(() => data || [], [data]);
  columns = useMemo(() => columns, [columns]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    setPageSize,
    // pageOptions,
    state,
    prepareRow,
  } = useTable({ columns, data }, usePagination);

  const { pageIndex, pageSize } = state;

  useEffect(() => {
    limit && setPageSize(30);
  }, [setPageSize, limit]);

  return (
    <div className="relative">
      {data?.length === 0 ? (
        <NoData type={type} />
      ) : (
        <div className="h-full w-full overflow-x-auto">
          <table className="w-full" {...getTableProps()}>
            <thead className="!p-2 !h-[45px] text-xs text-left">
              {headerGroups?.map((headerGroup) => (
                <tr className="h-[45px]" {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup?.headers?.map((column) => (
                    <th
                      className="px-4 text-gunsmoke text-base whitespace-nowrap"
                      {...column?.getHeaderProps()}
                    >
                      {column?.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page?.map((row) => {
                prepareRow(row);
                return (
                  <tr
                    className="relative border-b border-gallery"
                    {...row?.getRowProps()}
                  >
                    {row?.cells?.map((cell) => (
                      <td
                        className="text-sm text-emperor font-medium py-6"
                        {...cell?.getCellProps()}
                      >
                        {cell?.render("Cell")}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="flex justify-end items-center mt-2">
            <button
              disabled={
                disabledPrevBtn || disabledPrevBtn === undefined
                  ? !canPreviousPage
                  : disabledPrevBtn
              }
              onClick={() => {
                fetchPrevPage && fetchPrevPage();
                previousPage();
              }}
            >
              <IconArrowLeft />
            </button>
            <span className="text-[14px]">
              Page {currentPage ? currentPage : pageIndex + 1}
            </span>
            <button
              disabled={fetchPrevPage ? data.length < pageSize : !canNextPage}
              onClick={() => {
                fetchNextPage && fetchNextPage();
                nextPage();
                onNextPageClick && onNextPageClick();
              }}
            >
              <IconArrowRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Table;
