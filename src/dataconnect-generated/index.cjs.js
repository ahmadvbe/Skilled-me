const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs, getDataConnect } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'skilled-4d231-service',
  location: 'us-east4'
};
exports.connectorConfig = connectorConfig;
const dataConnectSettings = {};
exports.dataConnectSettings = dataConnectSettings;

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

const createSkillRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateSkill', inputVars);
}
createSkillRef.operationName = 'CreateSkill';
exports.createSkillRef = createSkillRef;

exports.createSkill = function createSkill(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createSkillRef(dcInstance, inputVars));
}
;

const updateSkillRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateSkill', inputVars);
}
updateSkillRef.operationName = 'UpdateSkill';
exports.updateSkillRef = updateSkillRef;

exports.updateSkill = function updateSkill(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(updateSkillRef(dcInstance, inputVars));
}
;

const deleteSkillRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteSkill', inputVars);
}
deleteSkillRef.operationName = 'DeleteSkill';
exports.deleteSkillRef = deleteSkillRef;

exports.deleteSkill = function deleteSkill(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(deleteSkillRef(dcInstance, inputVars));
}
;

const upsertUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpsertUser', inputVars);
}
upsertUserRef.operationName = 'UpsertUser';
exports.upsertUserRef = upsertUserRef;

exports.upsertUser = function upsertUser(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(upsertUserRef(dcInstance, inputVars));
}
;

const listSkillsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListSkills');
}
listSkillsRef.operationName = 'ListSkills';
exports.listSkillsRef = listSkillsRef;

exports.listSkills = function listSkills(dcOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrOptions, options, undefined,false, false);
  return executeQuery(listSkillsRef(dcInstance, inputVars), inputOpts && inputOpts.fetchPolicy);
}
;

const getSkillRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetSkill', inputVars);
}
getSkillRef.operationName = 'GetSkill';
exports.getSkillRef = getSkillRef;

exports.getSkill = function getSkill(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(getSkillRef(dcInstance, inputVars), inputOpts && inputOpts.fetchPolicy);
}
;

const getSkillsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetSkills', inputVars);
}
getSkillsRef.operationName = 'GetSkills';
exports.getSkillsRef = getSkillsRef;

exports.getSkills = function getSkills(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, false);
  return executeQuery(getSkillsRef(dcInstance, inputVars), inputOpts && inputOpts.fetchPolicy);
}
;
