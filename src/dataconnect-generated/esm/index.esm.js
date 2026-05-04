import { executeMutation, executeQuery, getDataConnect, mutationRef, queryRef, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: 'skilled-4d231-service',
  location: 'us-east4'
};
export const dataConnectSettings = {};

function validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, validateVars, validateVarsOptional) {
  if (dcOrVars && 'enableEmulator' in dcOrVars) {
    const dcInstance = dcOrVars;
    const realVars = varsOrOptions;
    const inputOpts = options;
    if (!realVars && validateVars) {
      throw new Error('Variables required.');
    }
    return { dc: dcInstance, vars: realVars, options: inputOpts };
  }

  const dcInstance = getDataConnect(connectorConfig);
  const realVars = dcOrVars;
  const inputOpts = varsOrOptions;
  if (!realVars && validateVars) {
    throw new Error('Variables required.');
  }
  return { dc: dcInstance, vars: realVars, options: inputOpts };
}

export const createSkillRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateSkill', inputVars);
}
createSkillRef.operationName = 'CreateSkill';

export function createSkill(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createSkillRef(dcInstance, inputVars));
}

export const updateSkillRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateSkill', inputVars);
}
updateSkillRef.operationName = 'UpdateSkill';

export function updateSkill(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(updateSkillRef(dcInstance, inputVars));
}

export const deleteSkillRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteSkill', inputVars);
}
deleteSkillRef.operationName = 'DeleteSkill';

export function deleteSkill(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(deleteSkillRef(dcInstance, inputVars));
}

export const upsertUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpsertUser', inputVars);
}
upsertUserRef.operationName = 'UpsertUser';

export function upsertUser(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(upsertUserRef(dcInstance, inputVars));
}

export const listSkillsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListSkills');
}
listSkillsRef.operationName = 'ListSkills';

export function listSkills(dcOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrOptions, options, undefined,false, false);
  return executeQuery(listSkillsRef(dcInstance, inputVars), inputOpts && inputOpts.fetchPolicy);
}

export const getSkillRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetSkill', inputVars);
}
getSkillRef.operationName = 'GetSkill';

export function getSkill(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(getSkillRef(dcInstance, inputVars), inputOpts && inputOpts.fetchPolicy);
}

export const getSkillsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetSkills', inputVars);
}
getSkillsRef.operationName = 'GetSkills';

export function getSkills(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, false);
  return executeQuery(getSkillsRef(dcInstance, inputVars), inputOpts && inputOpts.fetchPolicy);
}

