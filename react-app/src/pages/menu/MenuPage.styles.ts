import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .menu__main-container,
  .menu__second-container,
  .menu__third-container {
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media (min-width: 600px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 800px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .menupage__title {
    margin: 3em auto 1em auto;
  }
`;
