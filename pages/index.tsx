import { gql } from '@apollo/client';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import graphcmsClient from '../apollo-client';
import DescriptionText from '../components/Description/DescriptionText';
import Header from '../components/Header/Header';
import Layout from '../components/Layout/Layout';
import Member from '../components/Member/Member';
import { Personal } from '../interface/me/personal.interface';

const Home: NextPage<{ data: { data: { personal: Personal } } }> = ({
  data,
}) => {
  const [personal, setPersonal] = useState<Personal>();

  useEffect(() => {
    setPersonal(data.data.personal);
  }, [data, personal]);

  return (
    <Layout>
      <div className='global-wrapper'>
        {personal && (
          <>
            <Header
              firstname={personal.firstname}
              lastname={personal.lastname}
              job={personal.job}
            />
            <Member companies={personal.memberOf} />
            <DescriptionText desc={personal.description} />
          </>
        )}
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const data = await graphcmsClient.query({
    query: gql`
      query Personal {
        personal(where: { id: "ckthmximoofvl0c54ugidhjyh" }) {
          firstname
          lastname
          job
          description {
            html
          }
          socials {
            id
            url
            logo {
              url
            }
          }
          memberOf {
            id
            name
            logo {
              url
            }
            url
            textColor {
              hex
            }
          }
          workedFor {
            id
            name
            logo {
              url
            }
            url
            textColor {
              hex
            }
          }
        }
      }
    `,
  });

  return {
    props: { data },
  };
}

export default Home;
