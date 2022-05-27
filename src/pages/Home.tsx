import { Title, SearchInput, MenuList, Pokeball, Page } from '../components'

export const Home = () => {
  return (
    <Page>
      <Pokeball type="gray" height="h-64" inset="top-[-170px] right-[-100px] z-[-10]" opacity="opacity-30" />
      <Title title="What Pokemon are you looking for?" />
      <SearchInput />
      <MenuList columns="grid-cols-2" />
    </Page>
  )
}
