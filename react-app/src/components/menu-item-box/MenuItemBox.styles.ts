import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: var(--box--shadow);
  padding-bottom: 1em;
  max-width: 20em;
  margin: 1em;

  @media (min-width: 800px) {
    max-width: 15em;
  }

  .menu-item__img {
    width: 100%;
    height: 10em;
  }

  .menu-item__title,
  .menu-item__text {
    margin: 1em auto 0 auto;
    text-align: center;
  }
`;
