import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/conttacts/contactsSlice';
import css from './Filter.module.css'

function Filter() {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.contacts.filter);

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <label className={css.filterLabel}>
      Find contacts by name
      <input
      className={css.filterInput}
        type="text"
        name="filter"
        value={filterValue}
        onChange={handleFilterChange}
        placeholder="Enter name for Search"
      />
    </label>
  );
}

export default Filter;
