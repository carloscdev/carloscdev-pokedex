import SearchIcon from '../../assets/images/search.png'

export const SearchInput = () => {
  return (
    <label htmlFor="search" className="bg-gray-200 rounded-[30px] w-full flex p-3 h-12 gap-3 items-center">
      <img src={SearchIcon} alt="Search Icon" className="h-full" />
      <input id="search" type="search" placeholder="Search by name" autoComplete="off" className="bg-transparent w-full outline-none" />
    </label>
  )
}
