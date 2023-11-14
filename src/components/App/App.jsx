import ContactForm from 'components/ContactForm/ContactForm';
import ContactsList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';

function App() {
  return (
    <>
      <h1>Phone Book</h1>

      <ContactForm />

      <h2>Contacts</h2>

      <Filter />

      <ContactsList />

    </>
  );
}

export default App;
