import { ContactElement } from 'components/ContactElemet/ContactElement';
import { List } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectError,
  selectIsLoading,
  selectVisibleContacts,
} from 'redux_files/contacts/contactSelectors';
import { fetchContacts } from 'redux_files/contacts/operations';
import { useEffect } from 'react';
import { RotatingLines } from 'react-loader-spinner';

export const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const visibleContacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <>
      {isLoading && !error && (
        <RotatingLines
          visible={true}
          height="96"
          width="96"
          color="grey"
          strokeColor="blue"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      )}
      {error && <h3>{error}</h3>}
      {visibleContacts.length > 0 && (
        <>
          <h4>Find {visibleContacts.length} contacts</h4>
          <List>
            {visibleContacts.map(({ id, name, phone }) => (
              <ContactElement key={id} id={id} name={name} phone={phone} />
            ))}
          </List>
        </>
      )}
      {visibleContacts.length === 0 && !isLoading && !error && (
        <h3>No contacts found.</h3>
      )}
    </>
  );
};
