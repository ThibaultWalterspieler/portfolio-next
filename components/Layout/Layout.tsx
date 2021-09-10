import Head from 'next/head';
import { FC } from 'react';

const fontsWeight = [
  'Black',
  'Bold',
  'ExtraBold',
  'Light',
  'Medium',
  'UltraLight',
];

const FontLinks = () => (
  <>
    <link
      rel='preload'
      href={`/fonts/Butler/Butler.woff`}
      as='font'
      crossOrigin=''
    />
    {fontsWeight.map((w) => (
      <>
        <link
          key={w}
          rel='preload'
          href={`/fonts/Butler/Butler-${w}.woff`}
          as='font'
          crossOrigin=''
        />
        <link
          rel='preload'
          href={`/fonts/Butler/Butler-${w}.woff2`}
          as='font'
          crossOrigin=''
        />
      </>
    ))}
  </>
);

const Layout: FC = ({ children }) => {
  return (
    <>
      <Head>
        <FontLinks />
      </Head>
      <main>{children}</main>
    </>
  );
};

export default Layout;
