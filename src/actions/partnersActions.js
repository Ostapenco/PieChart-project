export const ADD_NEW_PARTNER = 'ADD_NEW_PARTNER';
export const ADD_WORKING_HOURS = 'ADD_WORKING_HOURS';

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
