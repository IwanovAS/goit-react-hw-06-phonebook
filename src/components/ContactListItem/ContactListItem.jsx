import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix';
import css from './ContactListItem.module.css';
import { deleteContact } from 'redux/conttacts/contactsSlice';

export const ContactListItem = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);

  const getFormFilter = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const handleRemoveContact = id => {
    dispatch(deleteContact(id));
    Notify.success('The contact was deleted');
  };

  return (
    <ul>
      {getFormFilter().map(contact => {
        const { id, name, number } = contact;
        return (
          <li className={css.listItem} key={id}>
            <span className={css.listItemText}>{name}:</span>
            <span className={css.listItemText}>{number}</span>
            <button
              className={css.deleteBtn}
              type="button"
              onClick={() => handleRemoveContact(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactListItem;
