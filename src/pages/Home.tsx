import { Title, SearchInput, MenuList, Pokeball, Page, Footer} from '../components'

export const Home = () => {
  return (
    <Page padding="px-4 py-10">
      <Pokeball type="gray" height="h-64" inset="top-[-100px] right-[-100px] z-[-10]" opacity="opacity-30" />
      <div className='grid gap-6'>
        <Title title="What Pokemon are you looking for?" />
        <SearchInput />
        <MenuList columns="grid-cols-2" />
      </div>
      <Footer />
    </Page>
  )
}
