import { useDispatch } from 'react-redux';
import { Button, Div, ListItem } from './ContactElement.styled';
import { deleteContact } from 'redux_files/contacts/operations';
import { LuTrash2 } from "react-icons/lu";

export const ContactElement = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <ListItem>
      <Div>
        {name}: <b>{phone}</b>
        <Button onClick={handleDelete}>Delete <LuTrash2 /></Button>
      </Div>
    </ListItem>
  );
};
