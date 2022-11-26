import { Container, Text } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { Layout, NotFavorites } from '../../components';
import { localFavorites } from '../../utils';

const FavoritesPage = () => {
  const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritesPokemons(localFavorites.pokemons());
  }, []);

  return (
    <Layout title="Pokemons - Favoritos">
      <NotFavorites />
    </Layout>
  );
};
export default FavoritesPage;
