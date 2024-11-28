import { useNavigate } from 'react-router-dom'
import SearchIcon from '../../assets/images/search.png'
import { useState } from 'react'
import { usePokemonContext } from '../../context/pokemon'

export const SearchInput = () => {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const [errorMsj, setErrorMsj] = useState('')
  const { handleGetPokemonById } = usePokemonContext()
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (search) {
      try {
        setErrorMsj('')
        setLoading(true)
        const result = await handleGetPokemonById(search)
        if (result) {
          navigate(`/pokedex/${search}`)
        } else {
          throw new Error('Pokemon not found')
        }
      } catch (error) {
        setErrorMsj('Pokemon not found')
      } finally {
        setLoading(false)
      }
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="bg-gray-200 rounded-[30px] w-full flex p-3 h-12 gap-3 items-center">
        <img src={SearchIcon} alt="Search Icon" className="h-full" />
        <input
          id="search"
          type="search"
          placeholder="Search by name or id"
          autoComplete="off"
          className="bg-transparent w-full outline-none"
          value={search}
          onChange={handleChange}
          disabled={loading}
        />
        <div>
          {loading && (
            <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
          )}
        </div>
        <button type="submit" className="hidden">Search</button> {/* Oculto pero necesario para enviar el formulario */}
      </form>
      {errorMsj && <span className="text-red-500 text-xs">{errorMsj}</span>}
    </div>
  )
}
