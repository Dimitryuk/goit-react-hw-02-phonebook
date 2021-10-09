import React from 'react';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div>
      <ol>
        {contacts.map(({ name, number, id }, i) => (
          <li key={i} className="ContactList_item">
            {name} {number}
            <button type="button" onClick={() => deleteContact(id)}>
              Delete
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
