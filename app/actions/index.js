import { myConfig } from '../../config';

const url = `${myConfig.ROOT_URL}/contact`;

export const selectContact = (contactId) => ({
  type: 'SELECT_CONTACT',
  selectId: contactId,
});

export const noneSelected = () => ({
  type: 'NONE_SELECTED',
});

export const formUpdate = ({ prop, value }) => ({
  type: 'FORM_UPDATE',
  payload: { prop, value },
});

export const createNewContact = ({ firstName, lastName, phone, email, company, project, notes }) => {
  return (dispatch) => {
    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName,
        lastName,
        phone,
        email,
        company,
        project,
        notes,
      }),
    })
      .then((response) => console.log(response))
      .then(() => {
        dispatch({ type: 'NEW_CONTACT' });
      })
      .catch((error) => console.log(error));
  };
};

export const newContact = () => ({
  type: 'NEW_CONTACT',
});

export const addContact = () => ({
  type: 'ADD_CONTACT',
});

export const loadInitialContacts = () => (dispatch) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      dispatch({ type: 'INITIAL_FETCH', payload: data });
    })
    .catch((error) => console.log(error));
};
