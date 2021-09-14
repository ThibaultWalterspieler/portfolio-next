import { gql } from '@apollo/client';
import axios from 'axios';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import graphcmsClient from '../apollo-client';
import DescriptionText from '../components/Description/DescriptionText';
import Header from '../components/Header/Header';
import Layout from '../components/Layout/Layout';
import Member from '../components/Member/Member';
import { Personal } from '../interface/me/personal.interface';
import {
  Stackoverflow,
  StackUserItem,
} from '../interface/stackoverflow/stackoverflow.interface';

const Home: NextPage<{
  page: { data: { personal: Personal } };
  stackoverflowProfile: StackUserItem;
}> = ({ page, stackoverflowProfile }) => {
  const [personal, setPersonal] = useState<Personal>();
  const [stackOverflowReputation, setStackOverflowReputation] =
    useState<number>();

  useEffect(() => {
    setPersonal(page.data.personal);
  }, [page, personal]);

  useEffect(() => {
    setStackOverflowReputation(stackoverflowProfile.reputation);
  }, [stackoverflowProfile, stackOverflowReputation]);

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
            <DescriptionText
              desc={personal.description}
              variables={{
                stack_point: stackOverflowReputation?.toString() || '0',
              }}
            />
          </>
        )}
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const page = await graphcmsClient.query({
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

  const stackoverflowProfile = await axios
    .get<Stackoverflow>(
      'https://api.stackexchange.com/2.3/users/10094877?key=U4DMV*8nvpm3EOpvf69Rxw((&site=stackoverflow&order=desc&sort=reputation&filter=default'
    )
    .then((res) => {
      if (res.data.items && res.data.items[0]) {
        return res.data.items[0];
      }
    });

  return {
    props: { page, stackoverflowProfile },
    revalidate: 1,
  };
}

export default Home;
