import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleAddContact } from 'redux/conttacts/contactsSlice';

function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.item);
  const [form, setForm] = useState({
    name: '',
    number: '',
  });

  const handleChangeForm = ({ target }) => {
    const { name, value } = target;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  const { name, number } = form;

  const isUniqueContact = () => {
    const isExistContact = contacts.find(contact => contact.name === name);
    if (isExistContact) {
      Notify.failure('Contact is already exist');
    }
    return !isExistContact;
  };

  const validateForm = () => {
    if (!name || !number) {
      Notify.failure('Some field is empty');
      return false;
    }
    return isUniqueContact(name);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    const isValidateForm = validateForm();
    if (!isValidateForm) return;

    dispatch(
      handleAddContact({ id: nanoid(), name, number }),
      Notify.success('The contact was added to phonebook')
    );
    const resetForm = () => setForm({ name: '', number: '' });
    resetForm();
  };

  useEffect(() => {
    if (contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="">
        Name
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={name}
          onChange={handleChangeForm}
          title="The name can only consist of letters, an apostrophe, a dash and spaces. For example Adrian, Jacob Mercer."
          required
        />
      </label>

      <button type="submit">
        <span>Add contact</span>
      </button>
    </form>
  );
}

export default ContactForm;
