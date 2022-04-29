import { Wrapper } from "./Booking.styles";
import { MouseEvent, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Booking = () => {
  const handleSendMail = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    alert("Metode ikke implementert");
  };
  const [value, onChange] = useState(new Date());
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
        <Calendar
          className="booking__calendar"
          onChange={onChange}
          value={value}
          allowPartialRange
          minDate={new Date()}
        />

        <p className="booking__date">Dato: {value.toDateString()}</p>
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
