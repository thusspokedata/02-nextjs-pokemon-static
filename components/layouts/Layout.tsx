import { FC, PropsWithChildren } from 'react';
import Head from 'next/head';
import { Navbar } from '../ui';


interface Props {
  title?: string;
  //   children: JSX.Element;
}

const origin = (typeof window === 'undefined') ? "": window.location.origin;

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

        <meta property="og:title" content={`Information about ${title}`}/>
        <meta property="og:description" content={`This is a page about ${title}`} />
        <meta property="og:image" content={`${origin}/img/banner.png`} />

      </Head>
      <Navbar />
      <main style={{ padding: '0px 20px' }}>{children}</main>
    </>
  );
};
