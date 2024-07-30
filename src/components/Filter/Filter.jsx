import { useDispatch, useSelector } from 'react-redux';
import { Input, Label } from './Filter.styled';
import { filterContacts } from 'redux_files/filter/filterSlice';
import { selectFilterValue } from 'redux_files/filter/filterSelectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilterValue);
  const changeFilter = e => {
    dispatch(filterContacts(e.currentTarget.value));
  };

  return (
    <Label>
      <h4>Find contact by name:</h4>
      <Input type="text" value={filterValue} onChange={changeFilter} />
    </Label>
  );
};
