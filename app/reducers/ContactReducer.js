const initialState = {
  contacts: [],
  detailView: false,
  contactSelected: null,
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  company: '',
  project: '',
  notes: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'INITIAL_FETCH':
      return {
        ...state,
        contacts: action.payload,
      };
    case 'SELECT_CONTACT':
      return {
        ...state,
        detailView: true,
        contactSelected: action.selectId,
      };
    case 'NONE_SELECTED':
      return {
        ...state,
        detailView: false,
        contactSelected: null,
      };
    case 'FORM_UPDATE':
      return {
        ...state,
        [action.payload.prop]: action.payload.value,
      };
    case 'NEW_CONTACT':
      return {
        ...state,
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        company: '',
        project: '',
        notes: '',
      };
    case 'ADD_CONTACT':
      return {
        ...state,
        ...action.addContact,
      };
    default:
      return state;
  }
};
