import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  _empty?: Maybe<Scalars['String']>;
  GetAgent?: Maybe<Agent>;
  GetShift?: Maybe<Shift>;
};

export type Mutation = {
  __typename?: 'Mutation';
  _empty?: Maybe<Scalars['String']>;
  UpdateAgent: UpdateAgentOutput;
};


export type Mutation_EmptyArgs = {
  emptyInput?: Maybe<Scalars['String']>;
};


export type MutationUpdateAgentArgs = {
  input: UpdateAgentInput;
};

export enum JobType {
  Parttime = 'PARTTIME',
  Fulltime = 'FULLTIME'
}

export type Agent = {
  __typename?: 'Agent';
  name: Scalars['String'];
  email: Scalars['String'];
  jobTitle: Scalars['String'];
  jobType: JobType;
  shifts: Array<Shift>;
};

export type UpdateAgentInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  jobTitle?: Maybe<Scalars['String']>;
  jobType?: Maybe<JobType>;
};

export type UpdateAgentOutput = {
  __typename?: 'UpdateAgentOutput';
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  jobTitle?: Maybe<Scalars['String']>;
  jobType?: Maybe<JobType>;
};

export type Shift = {
  __typename?: 'Shift';
  assignee?: Maybe<Scalars['String']>;
  activityName: Scalars['String'];
  startTime: Scalars['Int'];
  endTime: Scalars['Int'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Mutation: ResolverTypeWrapper<{}>;
  JobType: JobType;
  Agent: ResolverTypeWrapper<Agent>;
  UpdateAgentInput: UpdateAgentInput;
  UpdateAgentOutput: ResolverTypeWrapper<UpdateAgentOutput>;
  Shift: ResolverTypeWrapper<Shift>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  String: Scalars['String'];
  Mutation: {};
  Agent: Agent;
  UpdateAgentInput: UpdateAgentInput;
  UpdateAgentOutput: UpdateAgentOutput;
  Shift: Shift;
  Int: Scalars['Int'];
  Boolean: Scalars['Boolean'];
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  _empty?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  GetAgent?: Resolver<Maybe<ResolversTypes['Agent']>, ParentType, ContextType>;
  GetShift?: Resolver<Maybe<ResolversTypes['Shift']>, ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  _empty?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<Mutation_EmptyArgs, never>>;
  UpdateAgent?: Resolver<ResolversTypes['UpdateAgentOutput'], ParentType, ContextType, RequireFields<MutationUpdateAgentArgs, 'input'>>;
};

export type AgentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Agent'] = ResolversParentTypes['Agent']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  jobTitle?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  jobType?: Resolver<ResolversTypes['JobType'], ParentType, ContextType>;
  shifts?: Resolver<Array<ResolversTypes['Shift']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateAgentOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateAgentOutput'] = ResolversParentTypes['UpdateAgentOutput']> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  jobTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  jobType?: Resolver<Maybe<ResolversTypes['JobType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ShiftResolvers<ContextType = any, ParentType extends ResolversParentTypes['Shift'] = ResolversParentTypes['Shift']> = {
  assignee?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  activityName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  startTime?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  endTime?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Agent?: AgentResolvers<ContextType>;
  UpdateAgentOutput?: UpdateAgentOutputResolvers<ContextType>;
  Shift?: ShiftResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
