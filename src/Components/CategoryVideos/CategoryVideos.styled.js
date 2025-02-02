import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  margin-bottom: 5rem;
  gap: 1rem;
`;

export const CategoryTitle = styled.h2`
  width: fit-content;
  background-color: ${({ theme, category }) =>
    theme.colors.categoryColors[category]};
  color: #fff;
  padding: 1rem;
  border-radius: 8px;
  margin: 0;
  margin-bottom: 1rem;
`;

export const VideoList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;
