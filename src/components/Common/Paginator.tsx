import { POKEMON_TOTAL, PER_PAGE } from '../../utils/constans'

import { usePokemonContext } from "../../context/pokemon";

export const Paginator = () => {
  const { currentPage, handleChangePage } = usePokemonContext()
  return (
    <section className="flex items-center justify-between text-xs text-neutral-500">
      <div className="flex items-center gap-5">
        <span>Per page: {PER_PAGE}</span>
        <span>Total: {POKEMON_TOTAL}</span>
        <span>Page: {currentPage}</span>
      </div>
      <div className="flex items-center gap-1">
        <button disabled={currentPage === 1} onClick={() => handleChangePage(-1)} className="bg-cyan-500 h-10 px-3 rounded text-white font-bold shadow-customSmall">
          Prev
        </button>
        <button onClick={() => handleChangePage(1)} className="bg-cyan-500 h-10 px-3 rounded text-white font-bold shadow-customSmall">
          Next
        </button>
      </div>
    </section>
  )
}

