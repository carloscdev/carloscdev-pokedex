import { BrowserRouter, Routes, Route } from 'react-router-dom'
import routes from './routes'
import PokemonProvider from "../context/pokemon"


export const Navigation = () => {
  return (
    <BrowserRouter>
      <PokemonProvider>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                <route.layout>
                  <route.component />
                </route.layout>
              }
            />
          ))}
        </Routes>
      </PokemonProvider>
    </BrowserRouter>
  )
}

