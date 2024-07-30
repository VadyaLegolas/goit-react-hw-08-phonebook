import { useDispatch, useSelector } from 'react-redux';
import { Button, FormContact, Input, Label } from './ContactForm.styled';
import { useState } from 'react';
import { addContact } from 'redux_files/contacts/operations';
import { selectContacts } from 'redux_files/contacts/contactSelectors';
import { toast } from 'react-toastify';
import { LuBookOpenCheck } from "react-icons/lu";

export const ContactForm = ({ onSubmit }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const handleChange = ({ target: { name, value } }) => {
    if (name === 'name') {
      setName(value);
    }
    if (name === 'phone') {
      setPhone(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const normalizeName = name.toLowerCase();
    if (contacts.find(({ name }) => name.toLowerCase() === normalizeName)) {
      toast.error(`"${name}" is already in contacts`, {
        position: 'top-center',
        autoClose: 3000,
        theme: 'colored',
      });
      return;
    } else {
      dispatch(addContact({ name, phone }));
      setName('');
      setPhone('');
    }
  };

  return (
    <FormContact autoComplete="off" onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          value={name}
          required
          onChange={handleChange}
        />
      </Label>

      <br />
      <Label>
        Number
        <Input
          type="tel"
          name="phone"
          value={phone}
          required
          onChange={handleChange}
        />
      </Label>

      <Button type="submit">Add contact <LuBookOpenCheck /></Button>
    </FormContact>
  );
};
