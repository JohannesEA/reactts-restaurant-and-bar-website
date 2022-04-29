import { Wrapper } from "./Contact.styles";
import { MouseEvent, useState } from "react";
import Calendar from "react-calendar";

const Contact = () => {
  const handleSendMail = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    alert("Metode ikke implementert");
  };
  const [value, onChange] = useState(new Date());

  return (
    <Wrapper id="contact">
      <h1 className="contact_title">Book et bord</h1>
      <p className="contact__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
        consequuntur.
      </p>

      <form className="contact__form">
        <Calendar onChange={onChange} value={value} />

        <input className="contact__input" placeholder="Navn.." />
        <input className="contact__input" placeholder="Epost.." />
        <input className="contact__input" placeholder="Mobilnummer.." />
        <input className="contact__input" placeholder="Tittel.." />
        <textarea className="contact__input" placeholder="Melding.." />
        <button
          onClick={(e) => handleSendMail(e)}
          className="button button--primary contact__button"
        >
          Book
        </button>
      </form>
    </Wrapper>
  );
};

export default Contact;
