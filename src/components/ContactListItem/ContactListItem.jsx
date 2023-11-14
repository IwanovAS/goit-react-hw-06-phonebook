import React from 'react';
import { useDispatch } from 'react-redux';
import { Notify } from 'notiflix';
import { handleRemoveContact } from 'redux/conttacts/contactsSlice';
import css from './ContactListItem.module.css'

function ContactListItem({ name, number, id }) {
  const dispatch = useDispatch();

  return (
    <li className={css.listItem}>
      <span className={css.listItemText}>{name}:</span>
      <span className={css.listItemText}>{number}</span>
      <button
      className={css.deleteBtn}
        type="button"
        onClick={() =>
          dispatch(
            handleRemoveContact(id),
            Notify.success('The contact was deleted')
          )
        }
      >
        Delete
      </button>
    </li>
  );
}

export default ContactListItem;
