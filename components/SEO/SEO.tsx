import Head from 'next/head';
import { FC } from 'react';

const SEO: FC<{ description: string; title: string }> = ({
  description,
  title,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta property='og:type' content='website' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:site_name' content={title} />
      <meta property='twitter:card' content='summary' />
      {/* <meta property='twitter:creator' content={config.social.twitter} /> */}
      <meta property='twitter:title' content={title} />
      <meta property='twitter:description' content={description} />
    </Head>
  );
};

export default SEO;
