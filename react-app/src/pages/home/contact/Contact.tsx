import React from "react";
import { Wrapper } from "./Contact.styles";

const Contact = () => {
  return (
    <Wrapper id="contact">
      <h1 className="contact_title">Book et bord</h1>
      <p className="contact__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
        consequuntur.
      </p>
      <form className="contact__form">
        <input className="contact__input" placeholder="Navn.." />
        <input className="contact__input" placeholder="Epost.." />
        <input className="contact__input" placeholder="Mobilnummer.." />
        <input className="contact__input" placeholder="Tittel.." />
        <textarea className="contact__input" placeholder="Melding.." />
        <button className="button button--primary contact__button">Book</button>
      </form>
    </Wrapper>
  );
};

export default Contact;
