import styled from "styled-components";

export const Main = styled.main`
  background-color: ${({ theme }) => theme.colors.background};

  display: flex;
  flex-wrap: wrap;

  flex: 1;
`;
