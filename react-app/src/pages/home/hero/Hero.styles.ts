import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 1em auto;
  width: 90%;
  max-width: var(--max--section--width);

  @media (min-width: 1000px) {
    flex-direction: row-reverse;
    margin: 1em auto 0 auto;
  }

  .hero__img {
    flex: 1;
    width: 100%;
    max-width: 50em;
    min-height: 22em;
    margin: 0 auto;
    @media (min-width: 1000px) {
      width: 45%;
      margin: 0 auto;
    }
  }

  .hero__text-and-button-container {
    flex: 1;
    display: flex;
    justify-content: center;
    flex-direction: column;

    @media (min-width: 1000px) {
      width: 50%;
    }
  }

  .hero__title {
    width: 90%;
    margin: 0.5em auto 0 auto;
  }

  .hero__text {
    width: 90%;
    margin: 1em auto;
  }

  .hero__button {
    margin: 1em 2em;
  }
`;
