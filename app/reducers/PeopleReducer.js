const initialState = {
  people: [],
  detailView: false,
  personSelected: null,
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
        people: action.payload,
      }
    case 'SELECT_PERSON':
      return {
        ...state,
        detailView: true,
        personSelected: action.selectId
      }
    case 'NONE_SELECTED':
      return {
        ...state,
        detailView: false,
        personSelected: null
      }
    case 'FORM_UPDATE':
      return {
        ...state,
        [action.payload.prop]: action.payload.value
      }
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
      }
    case 'ADD_CONTACT':
      return {
        ...state,
        ...action.addContact
      }
    default:
      return state;
  }
};
