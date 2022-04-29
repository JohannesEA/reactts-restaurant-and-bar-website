import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 3em auto 0 auto;
  max-width: var(--max--section--width);

  .booking__title {
    width: 100%;
    text-align: center;
  }

  .booking__text {
    width: 90%;
    margin: 1em auto;
    text-align: center;
  }

  .booking__form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
  }

  .booking__input {
    margin: 1em auto;
  }

  .booking__label {
    width: 90%;
  }

  .booking__calendar {
    max-width: 20em;
    margin: 1em auto;
  }

  .booking__date {
    margin: 0 auto;
  }
`;
