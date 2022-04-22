import { Wrapper } from "./Booking.styles";
import { MouseEvent } from "react";

const Booking = () => {
  const handleSendMail = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    alert("Metode ikke implementert");
  };

  return (
    <Wrapper id="booking">
      <h1 className="booking__title">Bestill Bord</h1>
      <p className="booking__text">
        I vår online kalender kan du booke bord direkte – inne og ute. I
        sommerhalvåret er vår trivlige uteservering med sol og bymylder åpen.
        Finner du ikke bord til ønsket tid, gi oss gjerne beskjed så skal vi
        hjelpe deg.
      </p>

      <form className="booking__form">
        <input className="booking__input" placeholder="Navn.." />
        <input className="booking__input" placeholder="Epost.." />
        <textarea className="booking__input" placeholder="Melding.." />
        <button
          onClick={(e) => handleSendMail(e)}
          className="button button--primary booking__button"
        >
          Send
        </button>
      </form>
    </Wrapper>
  );
};

export default Booking;
