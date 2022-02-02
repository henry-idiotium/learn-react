import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `DateTime` scalar represents an ISO-8601 compliant date time type. */
  DateTime: any;
};

export type AccessToken = {
  __typename?: 'AccessToken';
  expireAt?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

export type AuthInfoRequestInput = {
  accessToken?: InputMaybe<Scalars['String']>;
};

export type AuthenticateResponse = {
  __typename?: 'AuthenticateResponse';
  accessToken?: Maybe<AccessToken>;
  refreshToken?: Maybe<Scalars['String']>;
  userInfo?: Maybe<Info>;
};

export type Inanis = {
  __typename?: 'Inanis';
  _: Scalars['Boolean'];
};

export type Info = {
  __typename?: 'Info';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type LoginRequestInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  login?: Maybe<ResponseOfAuthenticateResponse>;
  register?: Maybe<ResponseOfInanis>;
  rotate?: Maybe<ResponseOfAuthenticateResponse>;
  verifyEmail?: Maybe<ResponseOfInanis>;
};


export type MutationLoginArgs = {
  request?: InputMaybe<LoginRequestInput>;
};


export type MutationRegisterArgs = {
  request?: InputMaybe<RegisterRequestInput>;
};


export type MutationRotateArgs = {
  request?: InputMaybe<TokenRotateRequestInput>;
};


export type MutationVerifyEmailArgs = {
  request?: InputMaybe<VerifyEmailRequestInput>;
};

export type Query = {
  __typename?: 'Query';
  authInfo?: Maybe<ResponseOfUserDetails>;
  users?: Maybe<ResponseOfResponseTableOfUserDetails>;
};


export type QueryAuthInfoArgs = {
  request?: InputMaybe<AuthInfoRequestInput>;
};


export type QueryUsersArgs = {
  authToken?: InputMaybe<Scalars['String']>;
  request?: InputMaybe<SieveModelInput>;
};

export type RegisterRequestInput = {
  address?: InputMaybe<Scalars['String']>;
  confirmPassword: Scalars['String'];
  dateOfBirth?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  userName?: InputMaybe<Scalars['String']>;
};

export type ResponseOfAuthenticateResponse = {
  __typename?: 'ResponseOfAuthenticateResponse';
  data?: Maybe<AuthenticateResponse>;
  message?: Maybe<Scalars['String']>;
  timeStamp?: Maybe<Scalars['String']>;
};

export type ResponseOfInanis = {
  __typename?: 'ResponseOfInanis';
  data?: Maybe<Inanis>;
  message?: Maybe<Scalars['String']>;
  timeStamp?: Maybe<Scalars['String']>;
};

export type ResponseOfResponseTableOfUserDetails = {
  __typename?: 'ResponseOfResponseTableOfUserDetails';
  data?: Maybe<ResponseTableOfUserDetails>;
  message?: Maybe<Scalars['String']>;
  timeStamp?: Maybe<Scalars['String']>;
};

export type ResponseOfUserDetails = {
  __typename?: 'ResponseOfUserDetails';
  data?: Maybe<UserDetails>;
  message?: Maybe<Scalars['String']>;
  timeStamp?: Maybe<Scalars['String']>;
};

export type ResponseTableOfUserDetails = {
  __typename?: 'ResponseTableOfUserDetails';
  count: Scalars['Int'];
  currentPage: Scalars['Int'];
  rows?: Maybe<Array<Maybe<UserDetails>>>;
  totalPages: Scalars['Int'];
};

export type SieveModelInput = {
  filters?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  sorts?: InputMaybe<Scalars['String']>;
};

export type TokenRotateRequestInput = {
  accessToken?: InputMaybe<Scalars['String']>;
  refreshToken?: InputMaybe<Scalars['String']>;
};

export type UserDetails = {
  __typename?: 'UserDetails';
  address?: Maybe<Scalars['String']>;
  dateOfBirth?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  userName?: Maybe<Scalars['String']>;
};

export type VerifyEmailRequestInput = {
  code?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type LoginMutationVariables = Exact<{
  request?: InputMaybe<LoginRequestInput>;
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'ResponseOfAuthenticateResponse', message?: string | null | undefined, timeStamp?: string | null | undefined, data?: { __typename?: 'AuthenticateResponse', refreshToken?: string | null | undefined, accessToken?: { __typename?: 'AccessToken', token?: string | null | undefined, expireAt?: string | null | undefined } | null | undefined, userInfo?: { __typename?: 'Info', id?: string | null | undefined, email?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined };

export type RegisterMutationVariables = Exact<{
  request?: InputMaybe<RegisterRequestInput>;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register?: { __typename?: 'ResponseOfInanis', message?: string | null | undefined, timeStamp?: string | null | undefined } | null | undefined };

export type RotateTokenMutationVariables = Exact<{
  request?: InputMaybe<TokenRotateRequestInput>;
}>;


export type RotateTokenMutation = { __typename?: 'Mutation', rotate?: { __typename?: 'ResponseOfAuthenticateResponse', message?: string | null | undefined, timeStamp?: string | null | undefined, data?: { __typename?: 'AuthenticateResponse', refreshToken?: string | null | undefined, accessToken?: { __typename?: 'AccessToken', token?: string | null | undefined, expireAt?: string | null | undefined } | null | undefined, userInfo?: { __typename?: 'Info', id?: string | null | undefined, email?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined };

export type VerifyEmailMutationVariables = Exact<{
  request?: InputMaybe<VerifyEmailRequestInput>;
}>;


export type VerifyEmailMutation = { __typename?: 'Mutation', verifyEmail?: { __typename?: 'ResponseOfInanis', message?: string | null | undefined, timeStamp?: string | null | undefined } | null | undefined };

export type GetAuthInfoQueryVariables = Exact<{
  request?: InputMaybe<AuthInfoRequestInput>;
}>;


export type GetAuthInfoQuery = { __typename?: 'Query', authInfo?: { __typename?: 'ResponseOfUserDetails', message?: string | null | undefined, timeStamp?: string | null | undefined, data?: { __typename?: 'UserDetails', id?: string | null | undefined, email?: string | null | undefined, userName?: string | null | undefined } | null | undefined } | null | undefined };

export type GetUsersQueryVariables = Exact<{
  request?: InputMaybe<SieveModelInput>;
  authToken?: InputMaybe<Scalars['String']>;
}>;


export type GetUsersQuery = { __typename?: 'Query', users?: { __typename?: 'ResponseOfResponseTableOfUserDetails', message?: string | null | undefined, timeStamp?: string | null | undefined, data?: { __typename?: 'ResponseTableOfUserDetails', count: number, currentPage: number, totalPages: number, rows?: Array<{ __typename?: 'UserDetails', id?: string | null | undefined, userName?: string | null | undefined, firstName?: string | null | undefined, lastName?: string | null | undefined, email?: string | null | undefined, dateOfBirth?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined } | null | undefined };


export const LoginDocument = gql`
    mutation Login($request: LoginRequestInput) {
  login(request: $request) {
    message
    timeStamp
    data {
      refreshToken
      accessToken {
        token
        expireAt
      }
      userInfo {
        id
        email
      }
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($request: RegisterRequestInput) {
  register(request: $request) {
    message
    timeStamp
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const RotateTokenDocument = gql`
    mutation RotateToken($request: TokenRotateRequestInput) {
  rotate(request: $request) {
    message
    timeStamp
    data {
      refreshToken
      accessToken {
        token
        expireAt
      }
      userInfo {
        id
        email
      }
    }
  }
}
    `;
export type RotateTokenMutationFn = Apollo.MutationFunction<RotateTokenMutation, RotateTokenMutationVariables>;

/**
 * __useRotateTokenMutation__
 *
 * To run a mutation, you first call `useRotateTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRotateTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [rotateTokenMutation, { data, loading, error }] = useRotateTokenMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useRotateTokenMutation(baseOptions?: Apollo.MutationHookOptions<RotateTokenMutation, RotateTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RotateTokenMutation, RotateTokenMutationVariables>(RotateTokenDocument, options);
      }
export type RotateTokenMutationHookResult = ReturnType<typeof useRotateTokenMutation>;
export type RotateTokenMutationResult = Apollo.MutationResult<RotateTokenMutation>;
export type RotateTokenMutationOptions = Apollo.BaseMutationOptions<RotateTokenMutation, RotateTokenMutationVariables>;
export const VerifyEmailDocument = gql`
    mutation VerifyEmail($request: VerifyEmailRequestInput) {
  verifyEmail(request: $request) {
    message
    timeStamp
  }
}
    `;
export type VerifyEmailMutationFn = Apollo.MutationFunction<VerifyEmailMutation, VerifyEmailMutationVariables>;

/**
 * __useVerifyEmailMutation__
 *
 * To run a mutation, you first call `useVerifyEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyEmailMutation, { data, loading, error }] = useVerifyEmailMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useVerifyEmailMutation(baseOptions?: Apollo.MutationHookOptions<VerifyEmailMutation, VerifyEmailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VerifyEmailMutation, VerifyEmailMutationVariables>(VerifyEmailDocument, options);
      }
export type VerifyEmailMutationHookResult = ReturnType<typeof useVerifyEmailMutation>;
export type VerifyEmailMutationResult = Apollo.MutationResult<VerifyEmailMutation>;
export type VerifyEmailMutationOptions = Apollo.BaseMutationOptions<VerifyEmailMutation, VerifyEmailMutationVariables>;
export const GetAuthInfoDocument = gql`
    query GetAuthInfo($request: AuthInfoRequestInput) {
  authInfo(request: $request) {
    message
    timeStamp
    data {
      id
      email
      userName
    }
  }
}
    `;

/**
 * __useGetAuthInfoQuery__
 *
 * To run a query within a React component, call `useGetAuthInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAuthInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAuthInfoQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useGetAuthInfoQuery(baseOptions?: Apollo.QueryHookOptions<GetAuthInfoQuery, GetAuthInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAuthInfoQuery, GetAuthInfoQueryVariables>(GetAuthInfoDocument, options);
      }
export function useGetAuthInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAuthInfoQuery, GetAuthInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAuthInfoQuery, GetAuthInfoQueryVariables>(GetAuthInfoDocument, options);
        }
export type GetAuthInfoQueryHookResult = ReturnType<typeof useGetAuthInfoQuery>;
export type GetAuthInfoLazyQueryHookResult = ReturnType<typeof useGetAuthInfoLazyQuery>;
export type GetAuthInfoQueryResult = Apollo.QueryResult<GetAuthInfoQuery, GetAuthInfoQueryVariables>;
export const GetUsersDocument = gql`
    query GetUsers($request: SieveModelInput, $authToken: String) {
  users(request: $request, authToken: $authToken) {
    message
    timeStamp
    data {
      count
      rows {
        id
        userName
        firstName
        lastName
        email
        dateOfBirth
      }
      currentPage
      totalPages
    }
  }
}
    `;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *      request: // value for 'request'
 *      authToken: // value for 'authToken'
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;