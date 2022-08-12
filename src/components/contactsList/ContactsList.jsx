import { useDispatch, useSelector } from 'react-redux';
import { deleteContactFromLS } from 'redux/contacts/contactsActions';
import s from './ContactsList.module.css';

const ContactsList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  const getFilterSearchContact = () => {
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = id => dispatch(deleteContactFromLS(id));

  const filterSearchContact = getFilterSearchContact();

  return (
    <ul className={s.contactsList}>
      {filterSearchContact.map(contact => (
        <li className={s.contactsItem} key={contact.id}>
          <p className={s.contactName}>
            {contact.name}: {contact.number}
          </p>
          <button type="button" onClick={() => deleteContact(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
