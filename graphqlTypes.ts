export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  /** The `Long` scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
  Time: any;
};

/** A category for items. */
export type Category = {
  __typename?: 'Category';
  /** The document's ID. */
  _id: Scalars['ID'];
  /** The document's timestamp. */
  _ts: Scalars['Long'];
  name: Scalars['String'];
  items?: Maybe<Array<Item>>;
};

/** 'Category' input values */
export type CategoryInput = {
  name: Scalars['String'];
  items?: Maybe<Array<Scalars['ID']>>;
};

/** Something that a user may have an opinion about. */
export type Item = {
  __typename?: 'Item';
  /** The document's ID. */
  _id: Scalars['ID'];
  /** The document's timestamp. */
  _ts: Scalars['Long'];
  name: Scalars['String'];
  categories?: Maybe<Array<Category>>;
};

/** 'Item' input values */
export type ItemInput = {
  name: Scalars['String'];
  categories?: Maybe<Array<Scalars['ID']>>;
};

/** Location or method by which an Item was obtained */
export type ItemSource = {
  __typename?: 'ItemSource';
  /** The document's ID. */
  _id: Scalars['ID'];
  /** The document's timestamp. */
  _ts: Scalars['Long'];
  name: Scalars['String'];
  opinions?: Maybe<Array<Maybe<Opinion>>>;
};

/** 'ItemSource' input values */
export type ItemSourceInput = {
  name: Scalars['String'];
  opinions?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Update an existing document in the collection of 'User' */
  updateUser?: Maybe<User>;
  /** Create a new document in the collection of 'User' */
  createUser: User;
  /** Delete an existing document in the collection of 'Opinion' */
  deleteOpinion?: Maybe<Opinion>;
  /** Create a new document in the collection of 'ItemSource' */
  createItemSource: ItemSource;
  /** Create a new document in the collection of 'Opinion' */
  createOpinion: Opinion;
  /** Delete an existing document in the collection of 'Item' */
  deleteItem?: Maybe<Item>;
  /** Update an existing document in the collection of 'ItemSource' */
  updateItemSource?: Maybe<ItemSource>;
  /** Create a new document in the collection of 'Category' */
  createCategory: Category;
  /** Update an existing document in the collection of 'Category' */
  updateCategory?: Maybe<Category>;
  /** Update an existing document in the collection of 'Opinion' */
  updateOpinion?: Maybe<Opinion>;
  /** Delete an existing document in the collection of 'User' */
  deleteUser?: Maybe<User>;
  /** Delete an existing document in the collection of 'Category' */
  deleteCategory?: Maybe<Category>;
  /** Create a new document in the collection of 'Item' */
  createItem: Item;
  /** Update an existing document in the collection of 'Item' */
  updateItem?: Maybe<Item>;
  /** Delete an existing document in the collection of 'ItemSource' */
  deleteItemSource?: Maybe<ItemSource>;
};

export type MutationUpdateUserArgs = {
  id: Scalars['ID'];
  data: UserInput;
};

export type MutationCreateUserArgs = {
  data: UserInput;
};

export type MutationDeleteOpinionArgs = {
  id: Scalars['ID'];
};

export type MutationCreateItemSourceArgs = {
  data: ItemSourceInput;
};

export type MutationCreateOpinionArgs = {
  data: OpinionInput;
};

export type MutationDeleteItemArgs = {
  id: Scalars['ID'];
};

export type MutationUpdateItemSourceArgs = {
  id: Scalars['ID'];
  data: ItemSourceInput;
};

export type MutationCreateCategoryArgs = {
  data: CategoryInput;
};

export type MutationUpdateCategoryArgs = {
  id: Scalars['ID'];
  data: CategoryInput;
};

export type MutationUpdateOpinionArgs = {
  id: Scalars['ID'];
  data: OpinionInput;
};

export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteCategoryArgs = {
  id: Scalars['ID'];
};

export type MutationCreateItemArgs = {
  data: ItemInput;
};

export type MutationUpdateItemArgs = {
  id: Scalars['ID'];
  data: ItemInput;
};

export type MutationDeleteItemSourceArgs = {
  id: Scalars['ID'];
};

export type Opinion = {
  __typename?: 'Opinion';
  /** The document's ID. */
  _id: Scalars['ID'];
  rating: Rating;
  sources: Array<ItemSource>;
  user: User;
  item: Item;
  /** The document's timestamp. */
  _ts: Scalars['Long'];
};

/** 'Opinion' input values */
export type OpinionInput = {
  user?: Maybe<OpinionUserRelation>;
  item?: Maybe<OpinionItemRelation>;
  rating: Rating;
  sources: Array<Scalars['ID']>;
};

/** Allow manipulating the relationship between the types 'Opinion' and 'Item' using the field 'Opinion.item'. */
export type OpinionItemRelation = {
  /** Create a document of type 'Item' and associate it with the current document. */
  create?: Maybe<ItemInput>;
  /** Connect a document of type 'Item' with the current document using its ID. */
  connect?: Maybe<Scalars['ID']>;
};

/** The pagination object for elements of type 'Opinion'. */
export type OpinionPage = {
  __typename?: 'OpinionPage';
  /** The elements of type 'Opinion' in this page. */
  data: Array<Maybe<Opinion>>;
  /** A cursor for elements coming after the current page. */
  after?: Maybe<Scalars['String']>;
  /** A cursor for elements coming before the current page. */
  before?: Maybe<Scalars['String']>;
};

/** Allow manipulating the relationship between the types 'Opinion' and 'User' using the field 'Opinion.user'. */
export type OpinionUserRelation = {
  /** Create a document of type 'User' and associate it with the current document. */
  create?: Maybe<UserInput>;
  /** Connect a document of type 'User' with the current document using its ID. */
  connect?: Maybe<Scalars['ID']>;
};

export type Query = {
  __typename?: 'Query';
  /** Find a document from the collection of 'Item' by its id. */
  findItemByID?: Maybe<Item>;
  /** Find a document from the collection of 'Opinion' by its id. */
  findOpinionByID?: Maybe<Opinion>;
  /** Find a document from the collection of 'Category' by its id. */
  findCategoryByID?: Maybe<Category>;
  categoryByName?: Maybe<Category>;
  sourceByName?: Maybe<ItemSource>;
  /** Find a document from the collection of 'User' by its id. */
  findUserByID?: Maybe<User>;
  /** Find a document from the collection of 'ItemSource' by its id. */
  findItemSourceByID?: Maybe<ItemSource>;
  itemByName?: Maybe<Item>;
  userByFBId?: Maybe<User>;
};

export type QueryFindItemByIdArgs = {
  id: Scalars['ID'];
};

export type QueryFindOpinionByIdArgs = {
  id: Scalars['ID'];
};

export type QueryFindCategoryByIdArgs = {
  id: Scalars['ID'];
};

export type QueryCategoryByNameArgs = {
  name: Scalars['String'];
};

export type QuerySourceByNameArgs = {
  name: Scalars['String'];
};

export type QueryFindUserByIdArgs = {
  id: Scalars['ID'];
};

export type QueryFindItemSourceByIdArgs = {
  id: Scalars['ID'];
};

export type QueryItemByNameArgs = {
  name: Scalars['String'];
};

export type QueryUserByFbIdArgs = {
  fbUserId: Scalars['String'];
};

export enum Rating {
  Hate = 'HATE',
  DoNotLike = 'DO_NOT_LIKE',
  Like = 'LIKE',
  Love = 'LOVE',
}

/** A Quato User */
export type User = {
  __typename?: 'User';
  /** The document's ID. */
  _id: Scalars['ID'];
  /** The document's timestamp. */
  _ts: Scalars['Long'];
  /** Unique Facebook user Id */
  fbUserId: Scalars['String'];
  opinions: OpinionPage;
};

/** A Quato User */
export type UserOpinionsArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
};

/** 'User' input values */
export type UserInput = {
  /** Unique Facebook user Id */
  fbUserId: Scalars['String'];
  opinions?: Maybe<UserOpinionsRelation>;
};

/** Allow manipulating the relationship between the types 'User' and 'Opinion'. */
export type UserOpinionsRelation = {
  /** Create one or more documents of type 'Opinion' and associate them with the current document. */
  create?: Maybe<Array<Maybe<OpinionInput>>>;
  /** Connect one or more documents of type 'Opinion' with the current document using their IDs. */
  connect?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Disconnect the given documents of type 'Opinion' from the current document using their IDs. */
  disconnect?: Maybe<Array<Maybe<Scalars['ID']>>>;
};
