import { useState, useEffect } from 'react';

import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/fragments';

const useRepositories = () => {
  const { loading, error, data } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'network-only',
  });
  const repositories = data?.repositories || null;

  return { repositories, error, loading };
};

export default useRepositories;
