import { gql } from '@apollo/client';
import axios from 'axios';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import graphcmsClient from '../utils/graphcms-client';
import DescriptionText from '../components/Description/DescriptionText';
import Header from '../components/Header/Header';
import Layout from '../components/Layout/Layout';
import Member from '../components/Member/Member';
import { Personal } from '../interface/me/personal.interface';
import {
  Stackoverflow,
  StackUserItem,
} from '../interface/stackoverflow/stackoverflow.interface';
import githubClient from '../utils/github-client';
import SEO from '../components/SEO/SEO';

const Home: NextPage<{
  page: { data: { personal: Personal } };
  stackoverflowProfile: StackUserItem;
  githubContribution: { contribution: number; contributionYears: number[] };
}> = ({ page, stackoverflowProfile, githubContribution }) => {
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
      <SEO
        title={
          personal?.seoTitle || 'Thibault Walterspieler - Fullstack developer'
        }
        description={
          personal?.seoDescription ||
          'I’m Thibault Walterspieler a Fullstack developer'
        }
      />
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
                github_contribution:
                  githubContribution.contribution?.toString() || '0',
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
          seoTitle
          seoDescription
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

  const githubContribution = await githubClient
    .query({
      query: gql`
        {
          user(login: "ThibaultWalterspieler") {
            contributionsCollection {
              contributionCalendar {
                totalContributions
              }
              contributionYears
            }
          }
        }
      `,
    })
    .then((res) => ({
      contribution:
        res.data.user.contributionsCollection.contributionCalendar
          .totalContributions,
      contributionYears:
        res.data.user.contributionsCollection.contributionYears,
    }));

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
    props: { page, stackoverflowProfile, githubContribution },
    revalidate: 1,
  };
}

export default Home;
