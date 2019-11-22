export const ADD_NEW_PARTNER = 'ADD_NEW_PARTNER';
export const ADD_WORKING_HOURS = 'ADD_WORKING_HOURS';
export const DEL_PARTNER = 'DEL_PARTNER';
export const CHANGE_NAME = 'CHANGE_NAME';
export const CHANGE_VALUE = 'CHANGE_VALUE';

export const addingNewPartner = (name, value) => {
  return {
    type: ADD_NEW_PARTNER,
    name: name,
    value: value
  };
};

export const addingWorkingHours = (name, value) => {
  return {
    type: ADD_WORKING_HOURS,
    name: name,
    value: value
  };
};

export const delPartner = id => {
  return {
    type: DEL_PARTNER,
    id: id
  };
};

export const editingName = (id, newName) => {
  return {
    type: CHANGE_NAME,
    newId: id,
    newName: newName
  };
};

export const editingValue = (id, newValue) => {
  return {
    type: CHANGE_VALUE,
    newId2: id,
    newValue: newValue
  };
};
