import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 3em auto 0 auto;
  max-width: var(--max--section--width);

  .contact__title {
    width: 100%;
    text-align: center;
  }

  .contact__text {
    width: 90%;
    margin: 1em auto;
    text-align: center;
  }

  .contact__form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
  }

  .contact__input {
    margin: 1em auto;
  }
`;
