const initialState = {
  partners: [
    {
      id: 1,
      name: 'John',
      value: 30,
      points: 0
    },
    {
      id: 2,
      name: 'Peter',
      value: 5,
      points: 0
    },
    {
      id: 3,
      name: 'Steve',
      value: 15,
      points: 0
    }
  ]
};

const partnersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CLICK_ADD':
      const { partners } = state;
      const name = action.name;
      const value = action.value;
      return {
        ...state,
        partners: [
          ...partners,
          {
            id: partners.length + 1,
            name,
            value: +value,
            points: 0
          }
        ]
      };

    case 'CLICK_SUBMIT':
      const name1 = action.name;
      const value1 = action.value;
      const newPartner = state.partners.map(partner => {
        if (partner.name === name1) {
          return {
            ...partner,
            points: partner.value * value1
          };
        } else {
          return partner;
        }
      });
      return { ...state, partners: newPartner };

    default:
      return state;
  }
};

export default partnersReducer;
