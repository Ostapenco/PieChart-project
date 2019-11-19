export const addPartner = (name, value) => {
  return {
    type: 'CLICK_ADD',
    name: name,
    value: value
  };
};

export const submitHours = (name, value) => {
  return {
    type: 'CLICK_SUBMIT',
    name: name,
    value: value
  };
};
