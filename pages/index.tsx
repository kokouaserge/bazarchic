import React, { FC } from 'react';
import ApolloClient from '../services/apollo-client';
import { gql } from '@apollo/client';
import { launchesPastQuery } from '../graphql/queries';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { ILaunchePast } from '../types';
import LaunchesPastList from '../components/LaunchesPastList/LaunchesPastList';

interface PageHomeProps {
  launches: ILaunchePast[];
}

type ResponseProps = {
  launches: ILaunchePast[];
};

const Home: FC<PageHomeProps> = ({ launches }) => {
  return (
    <div className={`nc-PageHome overflow-hidden`} data-nc-id="PageHome">
      <Head>
        <title>Liste des films | Test Technique</title>
      </Head>

      <div className="container relative overflow-hidden ">
        <div className="relative py-8 mb-24 lg:mb-32">
          <LaunchesPastList launchesPast={launches} />
        </div>
      </div>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<
  ResponseProps
> = async () => {
  const { data } = await ApolloClient.query<any>({
    query: gql(launchesPastQuery)
  });

  return {
    props: {
      launches: data.launchesPast
    }
  };
};
