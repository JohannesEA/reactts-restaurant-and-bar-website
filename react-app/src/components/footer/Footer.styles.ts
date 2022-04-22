import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: var(--color--primary);

  .footer__inner-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: var(--max--section--width);
    width: 90%;
    margin: 3em auto 0 auto;
    background-color: var(--color--primary);
  }

  .footer__text {
    color: var(--color--light);
  }

  .footer__title {
    text-align: center;
    margin: 1em auto;
  }

  .footer__logo {
    flex: 1;
    max-width: 15em;
    margin: 0 auto;
    cursor: pointer;
  }

  .contact__icons {
    flex: 1;

    @media (min-width: 800px) {
      width: 50%;
      max-width: 100em;
      margin: auto 1em;
    }
  }
  .footer__contact-item {
    margin: 1em auto;
    display: flex;
    width: 100%;
    max-width: 15em;
    align-items: center;
    justify-content: space-between;
    @media (min-width: 800px) {
      width: 100%;
    }
  }

  .social__icons {
    flex: 1;

    margin: 1em auto;
    display: flex;
    width: 100%;
    max-width: 15em;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 800px) {
      width: 50%;
      max-width: 20em;
      margin: auto 1em;
    }
  }

  .footer__social-icon {
    cursor: pointer;
  }

  .copywight {
    margin: 1em auto;
  }

  .footer__middle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    width: 90%;

    @media (min-width: 800px) {
      flex-direction: row;
    }
  }

  .footer__main-container-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-height: 10em;

    flex-direction: column;
    @media (min-width: 800px) {
      flex-direction: row;
    }
  }

  .footer__item-container {
    flex: 1;
    margin: 10px;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .footer__item-container--social {
    flex-direction: row;
    justify-content: space-between;
  }
`;
