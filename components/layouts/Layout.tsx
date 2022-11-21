import { FC, PropsWithChildren } from 'react';
import Head from 'next/head';
import { Navbar } from '../ui';

interface Props {
  title?: string;
  //   children: JSX.Element;
}

export const Layout: FC<PropsWithChildren<Props>> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name="author" content="Thusspokedata" />
        <meta
          name="description"
          content={`Information about pokemon: ${title}`}
        />
        <meta name="keywords" content={`pokedex, pokemon, ${title}`} />
      </Head>
      <Navbar />
      <main style={{ padding: '0px 20px' }}>{children}</main>
    </>
  );
};
