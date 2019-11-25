import {
  ADD_NEW_PARTNER,
  ADD_WORKING_HOURS,
  DEL_PARTNER,
  CHANGE_NAME,
  CHANGE_VALUE
} from '../actions/partnersActions';

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
    case ADD_NEW_PARTNER:
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
            points: 0,
            delete: ''
          }
        ]
      };

    case ADD_WORKING_HOURS:
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

    case DEL_PARTNER:
      const id = action.id;
      const newPartnerList = state.partners.filter(
        partner => partner.id !== id
      );
      return { ...state, partners: newPartnerList };

    case CHANGE_NAME:
      const newId = action.newId;
      const newName = action.newName;
      const editedPartner = state.partners.map(partner => {
        if (partner.id === newId) {
          return {
            ...partner,
            name: newName
          };
        } else {
          return partner;
        }
      });
      return { ...state, partners: editedPartner };

    case CHANGE_VALUE:
      const newId2 = action.newId2;
      const newValue = action.newValue;
      const editedPartner2 = state.partners.map(partner => {
        if (partner.id === newId2) {
          return {
            ...partner,
            value: newValue
          };
        } else {
          return partner;
        }
      });
      return { ...state, partners: editedPartner2 };

    default:
      return state;
  }
};

export default partnersReducer;
