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
  _id: '',
  toUpdate: false,
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
        toUpdate: false,
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
    case 'UPDATE_CONTACT':
      return {
        ...state,
        toUpdate: true,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        phone: action.payload.phone,
        email: action.payload.email,
        company: action.payload.company,
        project: action.payload.project,
        notes: action.payload.notes,
        _id: action.payload._id,
      };
    case 'DELETE_CONTACT':
      return {
        ...state,
        detailView: false,
        contactSelected: null,
      };
    case 'SAVE_CONTACT':
      return {
        ...state,
        toUpdate: false,
        detailView: false,
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        company: '',
        project: '',
        notes: '',
        _id: '',
      };
    case 'CANCEL_UPDATE_CONTACT':
      return {
        ...state,
        toUpdate: false,
        detailView: true,
      };
    default:
      return state;
  }
};
