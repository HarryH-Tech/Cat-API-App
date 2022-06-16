import styled, { keyframes } from "styled-components";

const loadingSpinnerAnimation = keyframes`
  0%, 100% {
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(1800deg);
    animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
  }
  100% {
    transform: rotateY(3600deg);
  }
`;

export const LoadingContainer = styled.div`
  transform: translateZ(1px);
  margin: 2rem;

  div {
    width: 64px;
    height: 64px;
    margin: auto;
    border-radius: 50%;
    background: blue;
    animation: ${loadingSpinnerAnimation} 4s cubic-bezier(0, 0.2, 0.8, 1)
      infinite;
  }
`;

export const ErrorContainer = styled.div`
  border-radius: 0.6rem;
  border: 2px solid red;
  background-color: #ff7a7a;
  width: 60%;
  margin: 2rem auto;
  padding: 1.4rem;
  text-align: center;
  color: white;
  font-weight: bold;
`;
