import { useSelector } from 'react-redux';
import ContactsListItem from '../ContactListItem/ContactListItem';

function ContactsList() {
  const contacts = useSelector((state => state.contacts.item));
  const filterValue = useSelector(state => state.contacts.filter);

  const isVisibleContacts = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase())
    );

  const filterContact = isVisibleContacts();

  return (
    <ul>
      {filterContact.map(contact => (
        <ContactsListItem
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
        />
      ))}
    </ul>
  );
}

export default ContactsList;
