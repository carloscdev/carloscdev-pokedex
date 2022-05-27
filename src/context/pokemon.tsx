import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { PokemonObject, PokemonContextProps } from "../interfaces/pokemon";
import { useLocation } from "react-router-dom";
import { usePokemon } from '../hooks'
import { PER_PAGE } from '../utils/constans'


const Pokemon = createContext({} as PokemonContextProps);

export const usePokemonContext = () => useContext(Pokemon);

const PokemonProvider = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();

  const [pokemonList, setPokemonList] = useState<Array<PokemonObject>>([])
  const [isLoading, setIsLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const { getPokemonList } = usePokemon()

  const handleGetPokemonList = async () => {
    try {
      setIsLoading(true)
      const pokemon = await getPokemonList(PER_PAGE, currentPage)
      setPokemonList([...pokemon])
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false)
    }
  }

  const handleChangePage = () => {
    setCurrentPage((prev) => prev++)
  }

  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <Pokemon.Provider
      value={{
        isLoading,
        pokemonList,
        handleGetPokemonList,
        handleChangePage
      }}
    >
      {children}
    </Pokemon.Provider>
  );
};

export default PokemonProvider