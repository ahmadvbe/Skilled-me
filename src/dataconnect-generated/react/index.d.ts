import { CreateSkillData, CreateSkillVariables, UpdateSkillData, UpdateSkillVariables, DeleteSkillData, DeleteSkillVariables, UpsertUserData, UpsertUserVariables, ListSkillsData, GetSkillData, GetSkillVariables, GetSkillsData, GetSkillsVariables } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useCreateSkill(options?: useDataConnectMutationOptions<CreateSkillData, FirebaseError, CreateSkillVariables>): UseDataConnectMutationResult<CreateSkillData, CreateSkillVariables>;
export function useCreateSkill(dc: DataConnect, options?: useDataConnectMutationOptions<CreateSkillData, FirebaseError, CreateSkillVariables>): UseDataConnectMutationResult<CreateSkillData, CreateSkillVariables>;

export function useUpdateSkill(options?: useDataConnectMutationOptions<UpdateSkillData, FirebaseError, UpdateSkillVariables>): UseDataConnectMutationResult<UpdateSkillData, UpdateSkillVariables>;
export function useUpdateSkill(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateSkillData, FirebaseError, UpdateSkillVariables>): UseDataConnectMutationResult<UpdateSkillData, UpdateSkillVariables>;

export function useDeleteSkill(options?: useDataConnectMutationOptions<DeleteSkillData, FirebaseError, DeleteSkillVariables>): UseDataConnectMutationResult<DeleteSkillData, DeleteSkillVariables>;
export function useDeleteSkill(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteSkillData, FirebaseError, DeleteSkillVariables>): UseDataConnectMutationResult<DeleteSkillData, DeleteSkillVariables>;

export function useUpsertUser(options?: useDataConnectMutationOptions<UpsertUserData, FirebaseError, UpsertUserVariables>): UseDataConnectMutationResult<UpsertUserData, UpsertUserVariables>;
export function useUpsertUser(dc: DataConnect, options?: useDataConnectMutationOptions<UpsertUserData, FirebaseError, UpsertUserVariables>): UseDataConnectMutationResult<UpsertUserData, UpsertUserVariables>;

export function useListSkills(options?: useDataConnectQueryOptions<ListSkillsData>): UseDataConnectQueryResult<ListSkillsData, undefined>;
export function useListSkills(dc: DataConnect, options?: useDataConnectQueryOptions<ListSkillsData>): UseDataConnectQueryResult<ListSkillsData, undefined>;

export function useGetSkill(vars: GetSkillVariables, options?: useDataConnectQueryOptions<GetSkillData>): UseDataConnectQueryResult<GetSkillData, GetSkillVariables>;
export function useGetSkill(dc: DataConnect, vars: GetSkillVariables, options?: useDataConnectQueryOptions<GetSkillData>): UseDataConnectQueryResult<GetSkillData, GetSkillVariables>;

export function useGetSkills(vars?: GetSkillsVariables, options?: useDataConnectQueryOptions<GetSkillsData>): UseDataConnectQueryResult<GetSkillsData, GetSkillsVariables>;
export function useGetSkills(dc: DataConnect, vars?: GetSkillsVariables, options?: useDataConnectQueryOptions<GetSkillsData>): UseDataConnectQueryResult<GetSkillsData, GetSkillsVariables>;
