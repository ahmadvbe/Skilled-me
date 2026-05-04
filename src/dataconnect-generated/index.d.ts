import { ConnectorConfig, DataConnect, DataConnectSettings, ExecuteQueryOptions, MutationPromise, MutationRef, QueryPromise, QueryRef } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;
export const dataConnectSettings: DataConnectSettings;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface CreateSkillData {
  skill_insert: Skill_Key;
}

export interface CreateSkillVariables {
  authorClerkId: string;
  title: string;
  description: string;
  tags: string[];
  installCommand: string;
  promptConfig: string;
  usageExample: string;
}

export interface DeleteSkillData {
  skill_delete?: Skill_Key | null;
}

export interface DeleteSkillVariables {
  id: UUIDString;
}

export interface GetSkillData {
  skill?: {
    id: UUIDString;
    title: string;
    description: string;
    tags: string[];
    installCommand: string;
    promptConfig: string;
    usageExample: string;
    author: {
      username?: string | null;
      imageUrl?: string | null;
    };
      createdAt: TimestampString;
  } & Skill_Key;
}

export interface GetSkillVariables {
  id: UUIDString;
}

// 2:56:40
export interface GetSkillsData { 
  skills: ({
    id: UUIDString;
    title: string;
    description: string;
    tags: string[];
    createdAt: TimestampString;
    installCommand: string;
    author: {
      username?: string | null;
      imageUrl?: string | null;
      clerkId: string;
      email: string;
    } & User_Key;
  } & Skill_Key)[];
}

export interface GetSkillsVariables {
  searchTerm?: string | null;
  limit?: number | null;
}

export interface ListSkillsData {
  skills: ({
    id: UUIDString;
    title: string;
    description: string;
    tags: string[];
    author: {
      username?: string | null;
      imageUrl?: string | null;
    };
      createdAt: TimestampString;
  } & Skill_Key)[];
}

export interface Skill_Key {
  id: UUIDString;
  __typename?: 'Skill_Key';
}

export interface UpdateSkillData {
  skill_update?: Skill_Key | null;
}

export interface UpdateSkillVariables {
  id: UUIDString;
  title?: string | null;
  description?: string | null;
  tags?: string[] | null;
  installCommand?: string | null;
  promptConfig?: string | null;
  usageExample?: string | null;
}

export interface UpsertUserData {
  user_upsert: User_Key;
}

export interface UpsertUserVariables {
  clerkId: string;
  email: string;
  username?: string | null;
  imageUrl?: string | null;
}

export interface User_Key {
  clerkId: string;
  __typename?: 'User_Key';
}

interface CreateSkillRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateSkillVariables): MutationRef<CreateSkillData, CreateSkillVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateSkillVariables): MutationRef<CreateSkillData, CreateSkillVariables>;
  operationName: string;
}
export const createSkillRef: CreateSkillRef;

export function createSkill(vars: CreateSkillVariables): MutationPromise<CreateSkillData, CreateSkillVariables>;
export function createSkill(dc: DataConnect, vars: CreateSkillVariables): MutationPromise<CreateSkillData, CreateSkillVariables>;

interface UpdateSkillRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateSkillVariables): MutationRef<UpdateSkillData, UpdateSkillVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateSkillVariables): MutationRef<UpdateSkillData, UpdateSkillVariables>;
  operationName: string;
}
export const updateSkillRef: UpdateSkillRef;

export function updateSkill(vars: UpdateSkillVariables): MutationPromise<UpdateSkillData, UpdateSkillVariables>;
export function updateSkill(dc: DataConnect, vars: UpdateSkillVariables): MutationPromise<UpdateSkillData, UpdateSkillVariables>;

interface DeleteSkillRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteSkillVariables): MutationRef<DeleteSkillData, DeleteSkillVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteSkillVariables): MutationRef<DeleteSkillData, DeleteSkillVariables>;
  operationName: string;
}
export const deleteSkillRef: DeleteSkillRef;

export function deleteSkill(vars: DeleteSkillVariables): MutationPromise<DeleteSkillData, DeleteSkillVariables>;
export function deleteSkill(dc: DataConnect, vars: DeleteSkillVariables): MutationPromise<DeleteSkillData, DeleteSkillVariables>;

interface UpsertUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpsertUserVariables): MutationRef<UpsertUserData, UpsertUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpsertUserVariables): MutationRef<UpsertUserData, UpsertUserVariables>;
  operationName: string;
}
export const upsertUserRef: UpsertUserRef;

export function upsertUser(vars: UpsertUserVariables): MutationPromise<UpsertUserData, UpsertUserVariables>;
export function upsertUser(dc: DataConnect, vars: UpsertUserVariables): MutationPromise<UpsertUserData, UpsertUserVariables>;

interface ListSkillsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListSkillsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListSkillsData, undefined>;
  operationName: string;
}
export const listSkillsRef: ListSkillsRef;

export function listSkills(options?: ExecuteQueryOptions): QueryPromise<ListSkillsData, undefined>;
export function listSkills(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListSkillsData, undefined>;

interface GetSkillRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetSkillVariables): QueryRef<GetSkillData, GetSkillVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetSkillVariables): QueryRef<GetSkillData, GetSkillVariables>;
  operationName: string;
}
export const getSkillRef: GetSkillRef;

export function getSkill(vars: GetSkillVariables, options?: ExecuteQueryOptions): QueryPromise<GetSkillData, GetSkillVariables>;
export function getSkill(dc: DataConnect, vars: GetSkillVariables, options?: ExecuteQueryOptions): QueryPromise<GetSkillData, GetSkillVariables>;

interface GetSkillsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars?: GetSkillsVariables): QueryRef<GetSkillsData, GetSkillsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars?: GetSkillsVariables): QueryRef<GetSkillsData, GetSkillsVariables>;
  operationName: string;
}
export const getSkillsRef: GetSkillsRef;

// export function getSkills(vars?: GetSkillsVariables, options?: ExecuteQueryOptions): QueryPromise<GetSkillsData, GetSkillsVariables>;
export function getSkills(dc: DataConnect, vars?: GetSkillsVariables, options?: ExecuteQueryOptions): QueryPromise<GetSkillsData, GetSkillsVariables>;

