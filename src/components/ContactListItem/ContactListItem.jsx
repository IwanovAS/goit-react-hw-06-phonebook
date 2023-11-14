import React from 'react';
import { useDispatch } from 'react-redux';
import { Notify } from 'notiflix';
import { handleRemoveContact } from 'redux/conttacts/contactsSlice';

function ContactListItem({ name, number, id }) {
  const dispatch = useDispatch();

  return (
    <li>
      <span>{name}:</span>
      <span>{number}</span>
      <button
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
