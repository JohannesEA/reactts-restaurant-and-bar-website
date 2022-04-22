import styled, { keyframes } from "styled-components";

const showMenyAnimation = keyframes`
100%{
  left: 0;
}`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  background-color: var(--color--primary);
  min-height: 5em;

  .navbar__inner-container {
    width: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--color--primary);
  }

  .navbar__logo {
    max-width: 5em;
    cursor: pointer;
  }

  .navbar__menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .navbar__link {
    margin: 0 1em;
    cursor: pointer;
    color: var(--color--light);

    &:hover {
      color: var(--color--light-hover);
    }
  }

  .navbar__menu--responsive {
    left: -1000px;
    position: absolute;
    background-color: var(--color--primary);
  }

  .navbar__menu--responsive--active {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    padding: 1em;
    width: 100%;
    position: absolute;
    top: 5em;
    min-height: 20em;
    animation: ${showMenyAnimation} 0.3s linear forwards;
  }
`;
