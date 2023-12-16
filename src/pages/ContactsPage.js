import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { Container } from 'components/GlobalStyle';
import { Contacts } from 'components/Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';
import { NameInput } from 'components/NameInput/NameInput';

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);




  return (
    <Container>
      <h1>Phonebook</h1>
      <NameInput />
      <h2>Contacts</h2>
      <Filter />
      <Contacts />
    </Container>
  );
};

export default ContactsPage;
