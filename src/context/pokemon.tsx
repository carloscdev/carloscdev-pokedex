import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { PokemonObject, PokemonContextProps } from "../interfaces/pokemon";
import { useLocation } from "react-router-dom";
import { usePokemon } from '../hooks'
import { PER_PAGE } from '../utils/constans'


const Pokemon = createContext({} as PokemonContextProps);

export const usePokemonContext = () => useContext(Pokemon);

const PokemonProvider = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();

  const [pokemonItem, setPokemonItem] = useState<PokemonObject>({
    id: '',
    code: '',
    name: '',
    types: [{ slot: 0, type: { name: 'grass', url: '' }}],
    image: '',
    weight: 0,
    height: 0,
    species: { name: '', url:'' },
    abilities: [{ name: '', url: '' }],
    experience: 0,
    stats: {
      hp: 0,
      attack: 0,
      defense: 0,
      specialAttack: 0,
      specialDefense: 0,
      speed: 0,
      total: 0
    }
  })
  const [pokemonList, setPokemonList] = useState<Array<PokemonObject>>([])
  const [isLoading, setIsLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const { getPokemonList, getPokemonById } = usePokemon()
  const [loadPokemonList, setLoadPokemonList] = useState(false)

  useEffect(() => {
    if (loadPokemonList) {
      handleGetPokemonList()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage])

  const handleGetPokemonList = async () => {
    try {
      setIsLoading(true)
      const pokemon = await getPokemonList(PER_PAGE * currentPage, currentPage === 1 ? currentPage : currentPage * PER_PAGE - PER_PAGE + 1)
      setPokemonList([...pokemon])
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false)
      setLoadPokemonList(true)
    }
  }

  const handleGetPokemonById = async (id: number | string) => {
    try {
      setIsLoading(true)
      const pokemon = await getPokemonById(id)
      setPokemonItem({...pokemon})
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleChangePage = (value: number) => {
    if (!isLoading) {
      setCurrentPage(currentPage + value)
    }
  }

  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <Pokemon.Provider
      value={{
        isLoading,
        currentPage,
        pokemonItem,
        pokemonList,
        handleGetPokemonList,
        handleGetPokemonById,
        handleChangePage
      }}
    >
      {children}
    </Pokemon.Provider>
  );
};

export default PokemonProvider