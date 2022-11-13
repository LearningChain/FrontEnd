import { useQuery, QueryKey, UseQueryOptions } from 'react-query';

import { AxiosError } from 'axios';

import { requestGetUsernameCheck } from '@/apis/member';

const useUsernameCheck = ({
  storeCode,
  options,
}: {
  storeCode: QueryKey;
  options?: UseQueryOptions<boolean, AxiosError, boolean, QueryKey[]>;
}) =>
  useQuery(
    ['username-check', storeCode],
    ({ queryKey: [, nickname] }) => requestGetUsernameCheck(String(nickname)),
    {
      ...options,
      cacheTime: 0,
      staleTime: 0,
      suspense: false,
    },
  );

export default useUsernameCheck;
