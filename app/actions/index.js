export const selectPerson = (peopleId) => ({
  type: 'SELECT_PERSON',
  selectId: peopleId,
});

export const noneSelected = () => ({
  type: 'NONE_SELECTED',
});
