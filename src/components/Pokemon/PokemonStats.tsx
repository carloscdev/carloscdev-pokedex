import { useState, useEffect, useRef } from 'react';
import { PokemonInterface } from '../../interfaces/pokemon';
import { usePokemonContext } from "../../context/pokemon";
import { useNavigate } from 'react-router-dom';

export const PokemonStats = () => {
  const { pokemonItem } = usePokemonContext();
  const [currentValueMenu, setCurrentValueMenu] = useState(1);
  const [animationClass, setAnimationClass] = useState('slide-left')
  const previousValueMenuRef = useRef(currentValueMenu);

  useEffect(() => {
    const previousValueMenu = previousValueMenuRef.current;
    if (currentValueMenu > previousValueMenu) {
      setAnimationClass('slide-left');
    } else if (currentValueMenu < previousValueMenu) {
      setAnimationClass('slide-right');
    }
    previousValueMenuRef.current = currentValueMenu;
  }, [currentValueMenu]);

  if (!pokemonItem) {
    return null
  }

  const getCurrentComponent = () => {
    switch (currentValueMenu) {
      case 1:
        return <PokemonStatsAbout pokemonItem={pokemonItem} animationClass={animationClass} />;
      case 2:
        return <PokemonStatsBase pokemonItem={pokemonItem} animationClass={animationClass} />;
      case 3:
        return <PokemonStatsEvolution pokemonItem={pokemonItem} animationClass={animationClass} />;
      default:
        return <h2>Working ...</h2>;
    }
  };

  return (
    <div className="bg-white px-4 min-h-[350px] relative z-10">
      <div className="absolute left-0 right-0 -top-14 bg-white h-14 rounded-t-[50px]"></div>
      <PokemonStatsMenu currentValueMenu={currentValueMenu} setCurrentValueMenu={setCurrentValueMenu} />
      <section className="mt-6 grid gap-5 px-2">
        <div>
          {getCurrentComponent()}
        </div>
      </section>
    </div>
  );
};

interface PokemonStatsMenuProps {
  readonly currentValueMenu: number;
  readonly setCurrentValueMenu: Function;
}

function PokemonStatsMenu(props: PokemonStatsMenuProps) {
  const { currentValueMenu, setCurrentValueMenu } = props;
  const menuList = [
    { name: 'About', value: 1 },
    { name: 'Base Stats', value: 2 },
    { name: 'Evolution', value: 3 }
  ];
  return (
    <nav>
      <ul className="flex items-center gap-3 justify-around border-b border-gray-100">
        {menuList.map((item) => (
          <li
            key={item.value}
            className={`border-gray-400 pb-3 cursor-pointer font-semibold ${currentValueMenu === item.value ? 'border-b-2' : 'opacity-30'}`}
          >
            <button onClick={() => setCurrentValueMenu(item.value)}>
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

interface PokemonStatsAboutProps {
  readonly pokemonItem: PokemonInterface;
  readonly animationClass: string;
}

function PokemonStatsAbout(props: PokemonStatsAboutProps) {
  const { pokemonItem, animationClass } = props;
  const pokemonAbout = [
    { title: 'Type', value: `${pokemonItem.types.map(item => item.type.name).join(', ')}` },
    { title: 'Height', value: `${pokemonItem.height * 10} cm` },
    { title: 'Weight', value: `${pokemonItem.weight * 10} lbs` },
    { title: 'Abilities', value: `${pokemonItem.abilities.map(item => item.ability.name).join(', ')}` },
    { title: 'Experience', value: `${pokemonItem.base_experience}` }
  ];

  return (
    <div>
      <ul className={`space-y-2 ${animationClass}`}>
        {pokemonAbout.map((pokemon) => (
          <li key={pokemon.title} className="grid grid-cols-[65px,5px,1fr] items-center gap-5 font-semibold">
            <span className="opacity-30">
              {pokemon.title}
            </span>
            <span className="opacity-30">
              :
            </span>
            <span className="capitalize">
              {pokemon.value}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PokemonStatsBase(props: PokemonStatsAboutProps) {
  const { pokemonItem, animationClass } = props;
  const stats = pokemonItem.stats;
  const pokemonStats = [
    { title: 'HP', value: stats[0].base_stat },
    { title: 'Attack', value: stats[1].base_stat },
    { title: 'Defense', value: stats[2].base_stat },
    { title: 'Sp. Atk', value: stats[3].base_stat },
    { title: 'Sp. Def', value: stats[4].base_stat },
    { title: 'Speed', value: stats[5].base_stat },
  ];

  return (
    <div>
      <ul className={`space-y-2 ${animationClass}`}>
        {pokemonStats.map((pokemon) => (
          <li key={pokemon.title} className="grid grid-cols-[75px_1fr] items-center justify-between font-semibold">
            <span className="opacity-30 w-16">
              {pokemon.title}
            </span>
            <div className="flex items-center gap-3">
              <span className={`${pokemon.value > 50 ? 'text-green-500' : 'text-red-500'}`}>
                {pokemon.value}
              </span>
              <div className="bg-gray-200 overflow-hidden rounded-lg h-2 w-full">
                <p className={`${pokemon.value > 50 ? 'bg-green-400' : 'bg-red-400'} h-full`} style={{ width: `${pokemon.value}%` }}>
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PokemonStatsEvolution(props: PokemonStatsAboutProps) {
  const { evolutions, clearPokemonItem, handleGetPokemonById } = usePokemonContext();
  const { animationClass, pokemonItem } = props;
  const navigate = useNavigate();

  const handleGoToPokemon = (name: string) => {
    if (name !== pokemonItem.name) {
      clearPokemonItem();
      navigate(`/pokedex/${name}`);
      handleGetPokemonById(name, true);
    }
  }
  return (
    <div className={`space-y-2 ${animationClass}`}>
      <ul className='grid grid-cols-3'>
        {evolutions.map((evolution) => (
          <li key={evolution.id}>
            <button onClick={() => handleGoToPokemon(evolution.name)} className="w-full flex items-center gap-3 justify-center">
              <div>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${evolution.id}.png`} alt={evolution.name} />
                <h3 className='text-center font-semibold'>{evolution.name}</h3>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}