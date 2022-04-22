import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 3em auto 0 auto;
  max-width: var(--max--section--width);

  .menu__img {
    width: 7em;
    height: 7em;
    margin: 10px auto;

    @media (min-width: 600px) {
      width: 10em;
      height: 10em;
    }

    @media (min-width: 1000px) {
      width: 15em;
      height: 16em;
    }
  }

  .menu__images-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 90%;

    @media (min-width: 400px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 1000px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .menu__title {
    width: 100%;
    text-align: center;
  }

  .menu__text {
    width: 90%;
    margin: 1em auto;
    text-align: center;
  }

  .menu__text--primary {
    font-weight: bold;
  }

  .menu__button {
    margin: 1em auto;
  }

  .menu__link {
    width: 100%;
    text-align: center;
  }
`;
