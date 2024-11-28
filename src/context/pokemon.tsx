import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { PokemonContextProps, PokemonInterface } from "../interfaces/pokemon";
import { useLocation, useNavigate } from "react-router-dom";
import { usePokemon } from '../hooks'
import { PER_PAGE } from '../utils/constans'
import { Chain, PokemonEvolutionFormatedInterface } from "../interfaces/pokemonEvolution";


const Pokemon = createContext({} as PokemonContextProps);

export const usePokemonContext = () => useContext(Pokemon);

const PokemonProvider = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();

  const [pokemonItem, setPokemonItem] = useState<PokemonInterface | null>(null)
  const [pokemonList, setPokemonList] = useState<Array<PokemonInterface>>([])
  const [isLoading, setIsLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [evolutions, setEvolutions] = useState<PokemonEvolutionFormatedInterface[]>([
    {
      id: 0,
      name: '',
      type: 'normal'
    }
  ])
  const { getPokemonList, getPokemonById, getPokemonEvolutions } = usePokemon()
  const [loadPokemonList, setLoadPokemonList] = useState(false)

  const navigate = useNavigate()

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

  const handleGetPokemonEvolutions = async (id: number | string) => {
    try {
      const evolutions = await getPokemonEvolutions(id)
      const parseEvolutionChain = (chain: any, type = 'pre-evolution') => {
        const formatted: PokemonEvolutionFormatedInterface[] = [];
        if (!chain) return formatted;

        // Obtener el ID del Pokémon
        const pokemonId = chain.species.url.split('/')[6];

        // Agregar el Pokémon actual al array
        formatted.push({
          id: pokemonId,
          name: chain.species.name,
          type: type,
        });

        // Procesar las evoluciones siguientes
        chain.evolves_to.forEach((evolution: Chain) => {
          const nextType = evolution.evolves_to.length > 0 ? 'normal' : 'evolution';
          formatted.push(...parseEvolutionChain(evolution, nextType));
        });
        return formatted;
      };
      const formattedEvolutions = parseEvolutionChain(evolutions.chain);
      setEvolutions([...formattedEvolutions]);
    } catch (error) {
      console.log(error)
    }
  }

  const clearPokemonItem = () => {
    setPokemonItem(null)
  }

  const handleGetPokemonById = async (id: number | string, loading: boolean) => {
    try {
      if (loading) {
        setIsLoading(true)
      }
      const pokemon = await getPokemonById(id)
      setPokemonItem({...pokemon})
      return true
    } catch (error) {
      console.log(error)
      navigate('/pokedex')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSetPokemonDetail = (pokemon: PokemonInterface) => {
    setPokemonItem({...pokemon})
  }

  const handleChangePage = (value: number) => {
    if (!isLoading) {
      setCurrentPage(currentPage + value)
    }
  }

  const handleGoToPage = (page: number) => {
    if (!isLoading) {
      setCurrentPage(page)
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
        evolutions,
        clearPokemonItem,
        handleGetPokemonList,
        handleGetPokemonById,
        handleChangePage,
        handleSetPokemonDetail,
        handleGoToPage,
        handleGetPokemonEvolutions
      }}
    >
      {children}
    </Pokemon.Provider>
  );
};

export default PokemonProvider