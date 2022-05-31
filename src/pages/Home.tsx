import { Title, SearchInput, MenuList, Pokeball, Page } from '../components'
import { Footer } from '../components'

export const Home = () => {
  return (
    <Page padding="px-4 py-10">
      <Pokeball type="gray" height="h-64" inset="top-[-170px] right-[-100px] z-[-10]" opacity="opacity-30" />
      <Title title="What Pokemon are you looking for?" />
      <SearchInput />
      <MenuList columns="grid-cols-2" />
      <Footer />
    </Page>
  )
}
