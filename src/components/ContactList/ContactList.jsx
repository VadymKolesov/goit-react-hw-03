import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

function ContactList({ contacts, onDelete }) {
  return (
    <ul className={css.list}>
      {contacts.map((contact) => {
        return (
          <li key={contact.id}>
            <Contact
              id={contact.id}
              name={contact.name}
              number={contact.number}
              onDelete={onDelete}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default ContactList;
