import styled from '@emotion/styled';
import { GrFormSearch } from 'react-icons/gr';

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  border: 1px solid black;
  overflow: hidden;
`;

export const SearchFormButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  :hover,
  :focus {
    opacity: 1;
  }
`;

export const Icon = styled(GrFormSearch)`
  width: 34px;
  height: 34px;
`;

export const SearchFormButtonLabel = styled.span`
  position: absolute;
  color: black;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  ::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;