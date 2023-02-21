import styled from '@emotion/styled';

export const TrendTitle = styled.h1`
  text-align: center;
  font-size: 32px;
  line-height: 1.36;
  color: red;
`;

export const FilmTitle = styled.h2`
  text-align: center;
  font-size: 25px;
  line-height: 1.11;
  text-transform: uppercase;
  color: black;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    color: #2196f3;
  }
`;
