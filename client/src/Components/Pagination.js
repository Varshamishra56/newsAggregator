import React from 'react';

function Pagination({ page, setPage, totalPages }) {
  return (
    <div className="flex justify-center mt-8">
      <button
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
        className="px-4 py-2 mx-2 bg-gray-800 text-white rounded disabled:bg-gray-400"
      >
        Previous
      </button>
      <button
        onClick={() => setPage(page + 1)}
        disabled={page === totalPages}
        className="px-4 py-2 mx-2 bg-gray-800 text-white rounded disabled:bg-gray-400"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;