import { GetStaticProps, NextPage } from 'next';
import { Grid } from '@nextui-org/react';
import { pokeApi } from '../api';
import { SmallPokemon } from '../interfaces';
import { PokemonCard, Layout } from '../components';

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  console.log(pokemons);
  return (
    <Layout title="Pokemons List">
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Grid.Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get('/pokemon?limit=151');

  const pokemons: SmallPokemon[] = data.results.map((poke: any, i: number) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
      i + 1
    }.png`,
  }));
  return {
    props: {
      pokemons,
      // will be passed to the page component as props
    },
  };
};

export default HomePage;
