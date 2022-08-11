import { useDispatch, useSelector } from 'react-redux';
import { Report } from 'notiflix/build/notiflix-report-aio';
import ContactForm from './contactForm/ContactForm';
import Filter from './filter/Filter';
import ContactsList from './contactsList/ContactsList';
import s from './App.module.css';
import {
  addContactToLS,
  addFilter,
  deleteContactFromLS,
} from './redux/contacts/contactsActions';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  const handleChange = e => {
    const { value } = e.target;
    dispatch(addFilter(value));
  };

  const addContact = data => {
    if (checkRepeatContact(data)) {
      return Report.failure(`${data.name} is already in contacts.`);
    }
    dispatch(addContactToLS(data));
  };

  const getFilterSearchContact = () => {
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filterSearchContact = getFilterSearchContact();

  const checkRepeatContact = data => {
    return contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );
  };

  const deleteContact = id => dispatch(deleteContactFromLS(id));

  return (
    <div className={s.container}>
      <h1 className={s.mainTitle}>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2 className={s.secondaryTitle}>Contacts</h2>
      <Filter filter={filter} handleChange={handleChange} />
      <ContactsList
        filterSearchContact={filterSearchContact}
        deleteContact={deleteContact}
      />
    </div>
  );
};

export default App;
