import { useEffect, useState } from 'react';
import { FavoritePokemons, Layout, NotFavorites } from '../../components';
import { localFavorites } from '../../utils';

const FavoritesPage = () => {
  const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritesPokemons(localFavorites.pokemons());
  }, []);

  return (
    <Layout title="Pokemons - Favoritos">
      {
        favoritesPokemons.length === 0 
          ? (<NotFavorites />) 
          : (<FavoritePokemons pokemons={favoritesPokemons} /> )
      }
    {/* <FavoriteCardPokemon pokemonId={id}  */}

      
    </Layout>
  );
};
export default FavoritesPage;
