import styled from "styled-components";

export const CatInfoContainer = styled.div`
  background-color: #eeffff;
  text-align: center;
  padding: 0.4rem;
  margin: 3rem;
  border: 0.1rem solid #4477ff;
  border-radius: 2rem;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0.4rem 0.4rem 0.4rem black;
  }
`;

export const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

export const MetaDataContainer = styled.div`
  padding: 0.2rem;
  margin: ${(props) => (props.margin ? props.margin : "1rem")};
  width: ${(props) => (props.width ? props.width : "40%")};
`;

export const Divider = styled.hr`
  margin: 0.2rem;
`;

export const Description = styled.p`
  text-align: justify;
  text-align-last: center;
  width: 80%;
  margin: auto;
`;
