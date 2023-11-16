import ContactForm from 'components/ContactForm/ContactForm';
import ContactListItem from 'components/ContactListItem/ContactListItem';
import Filter from 'components/Filter/Filter';
import './App.module.css'

function App() {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactListItem />
    </>
  );
}

export default App;
