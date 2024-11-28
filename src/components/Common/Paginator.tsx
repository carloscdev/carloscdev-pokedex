import { POKEMON_TOTAL, PER_PAGE } from '../../utils/constans'

import { usePokemonContext } from "../../context/pokemon";

export const Paginator = () => {
  const { currentPage, handleChangePage, handleGoToPage } = usePokemonContext()
  const totalPages = Math.ceil(POKEMON_TOTAL / PER_PAGE)
  
  const getPages = () => {
    let startPage = Math.max(currentPage - 3, 1);
    let endPage = Math.min(currentPage + 3, totalPages);

    if (endPage - startPage < 6) {
      if (startPage > 1) {
        startPage = endPage - 6;
      } else {
        endPage = startPage + 6;
      }
    }

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };
  return (
    <div className='pb-8 pt-4'>
      <div className="flex justify-between items-center gap-1 w-full text-xs">
        <button disabled={currentPage === 1} onClick={() => handleChangePage(-1)} className="border border-cyan-500 h-8 px-3 rounded text-cyan-500 font-semibold">
          Prev
        </button>
        {getPages().map((page) => (
          <button
            key={page}
            onClick={() => handleGoToPage(page)}
            className={`h-8 w-8 flex items-center justify-center px-3.5 border border-cyan-500 rounded font-semibold ${
              page === currentPage
                ? 'bg-cyan-500 text-white'
                : 'bg-white text-cyan-500'
            }`}
          >
            {page}
          </button>
        ))}
        <button onClick={() => handleChangePage(1)} className="border border-cyan-500 h-8 px-3 rounded text-cyan-500 font-semibold">
          Next
        </button>
      </div>
      <section className="flex items-center justify-center text-xs text-neutral-400 mt-4 gap-6">
          <span>Per page: {PER_PAGE}</span>
          <span>Total: {POKEMON_TOTAL}</span>
          <span>Page: {currentPage}</span>
        </section>
    </div>
  )
}

