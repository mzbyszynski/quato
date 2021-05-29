import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as Types from '../graphqlTypes';

const defaultOptions = {};
export type UserLookupQueryVariables = Types.Exact<{
  fbUserId: Types.Scalars['String'];
}>;

export type UserLookupQuery = { __typename?: 'Query' } & {
  userByFBId?: Types.Maybe<
    { __typename?: 'User' } & Pick<Types.User, '_id' | 'fbUserId'>
  >;
};

export type CreateUserMutationVariables = Types.Exact<{
  fbUserId: Types.Scalars['String'];
}>;

export type CreateUserMutation = { __typename?: 'Mutation' } & {
  createUser: { __typename?: 'User' } & Pick<Types.User, '_id'>;
};

export const UserLookupDocument = gql`
  query UserLookup($fbUserId: String!) {
    userByFBId(fbUserId: $fbUserId) {
      _id
      fbUserId
    }
  }
`;

/**
 * __useUserLookupQuery__
 *
 * To run a query within a React component, call `useUserLookupQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserLookupQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserLookupQuery({
 *   variables: {
 *      fbUserId: // value for 'fbUserId'
 *   },
 * });
 */
export function useUserLookupQuery(
  baseOptions: Apollo.QueryHookOptions<
    UserLookupQuery,
    UserLookupQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UserLookupQuery, UserLookupQueryVariables>(
    UserLookupDocument,
    options,
  );
}
export function useUserLookupLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    UserLookupQuery,
    UserLookupQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UserLookupQuery, UserLookupQueryVariables>(
    UserLookupDocument,
    options,
  );
}
export type UserLookupQueryHookResult = ReturnType<typeof useUserLookupQuery>;
export type UserLookupLazyQueryHookResult = ReturnType<
  typeof useUserLookupLazyQuery
>;
export type UserLookupQueryResult = Apollo.QueryResult<
  UserLookupQuery,
  UserLookupQueryVariables
>;
export const CreateUserDocument = gql`
  mutation CreateUser($fbUserId: String!) {
    createUser(data: { fbUserId: $fbUserId }) {
      _id
    }
  }
`;
export type CreateUserMutationFn = Apollo.MutationFunction<
  CreateUserMutation,
  CreateUserMutationVariables
>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      fbUserId: // value for 'fbUserId'
 *   },
 * });
 */
export function useCreateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateUserMutation,
    CreateUserMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(
    CreateUserDocument,
    options,
  );
}
export type CreateUserMutationHookResult = ReturnType<
  typeof useCreateUserMutation
>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<
  CreateUserMutation,
  CreateUserMutationVariables
>;
