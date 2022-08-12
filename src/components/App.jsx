import ContactForm from './contactForm/ContactForm';
import Filter from './filter/Filter';
import ContactsList from './contactsList/ContactsList';
import s from './App.module.css';

const App = () => {
  return (
    <div className={s.container}>
      <h1 className={s.mainTitle}>Phonebook</h1>
      <ContactForm />
      <h2 className={s.secondaryTitle}>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
};

export default App;
