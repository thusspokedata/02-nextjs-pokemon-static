import { NextPage, GetStaticPaths, GetStaticProps } from 'next';

import { pokeApi } from '../../api';
import { Pokemon } from '../../interfaces';

interface Props {
    pokemon: Pokemon;
  }

const PokemonByNamePage: NextPage<Props> = ({pokemon}) => {
  return (
    <div>[name]</div>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const pokemons151 = [...Array(151)].map((value, index) => `${index + 1}`);
  
    return {
      paths: pokemons151.map((id) => ({
        params: { id },
      })),
      fallback: false,
    };
  };
  
  export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { id } = params as { id: string };
  
    const { data } = await pokeApi.get<Pokemon>(`/pokemon/name/${name}`);
  
    return {
      props: {
        pokemon: data,
      },
    };
  };
  
  export default PokemonPage;
  