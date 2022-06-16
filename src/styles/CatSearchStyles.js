import styled from "styled-components";

export const SearchTitle = styled.h2`
  text-decoration: underline;
  margin-bottom: 1rem;
`;

export const SearchBarContainer = styled.div`
  border: 0.1rem solid #4477ff;
  border-radius: 0.4rem;
  padding: 0.6rem;
  margin: auto;
  width: 60%;
  text-align: center;
  background-color: white;
`;

export const SearchBar = styled.select`
  border-radius: 0.4rem;
  padding: 0.4rem;
  cursor: pointer;
  text-align: center;

  option {
    background-color: #aaddff;
    padding: 0.2rem;
  }
`;
