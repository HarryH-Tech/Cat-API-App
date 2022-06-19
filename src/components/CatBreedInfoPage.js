import { useEffect, useState } from "react";
import axios from "axios";

// CUSTOM IMPORTS
import CatSearch from "./CatSearch";

// STYLES
import {
  CatInfoContainer,
  FlexBox,
  MetaDataContainer,
  Divider,
  Description,
  SubHeading,
  Title,
} from "../styles/CatBreedInfoStyles";
import { LoadingContainer, ErrorContainer } from "../styles/Utils";

function CatList() {
  const [cats, setCats] = useState("");
  const [appData, setAppData] = useState({
    loading: true,
    error: "",
  });

  // RENDER AN ABYSSINIAN CAT ON INITIAL PAGE LOaD
  useEffect(() => {
    axios
      .get("https://api.thecatapi.com/v1/images/search?breed_ids=abys", {
        headers: {
          Authorization: process.env.REACT_APP_API_KEY,
        },
      })
      .then((res) => {
        setAppData({ loading: false, error: false });
        setCats(res.data[0]);
      });
  }, []);

  // FETCH DATA FOR CAT THAT THE USER SEARCHERD FOR
  const searchBreed = (breed) => {
    setAppData({ loading: true, error: false });
    axios
      .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breed}`, {
        headers: {
          Authorization: process.env.REACT_APP_API_KEY,
        },
      })
      .then((res) => {
        setAppData({ loading: false, error: false });
        setCats(res.data);
      })
      .catch((err) => {
        console.log(err);
        setAppData({
          loading: false,
          error:
            "Sorry, there was an error retrieving the data. Please try again.",
        });
      });
  };

  // RENDER STARS IN RATINGS SECTION
  function renderStars(number) {
    var starCount = [];
    for (let i = 0; i < number; i++) {
      starCount.push(
        <span key={i} className="fa fa-star" style={{ color: "blue" }}></span>
      );
    }
    return starCount;
  }

  const { loading, error } = appData;
  return (
    <>
      <CatSearch searchBreed={searchBreed} />
      {loading && (
        <LoadingContainer>
          <div></div>
        </LoadingContainer>
      )}
      {error && <ErrorContainer>{error}</ErrorContainer>}
      {cats && !loading && !error
        ? cats.breeds.map((cat, index) => (
            <CatInfoContainer key={index}>
              <Title fontSize="2rem">{cat.name}</Title>
              <br />
              <img
                src={cats.url}
                alt={`${cat.name}`}
                width="200"
                height="200"
              />
              <br />
              <br />
              <Description> {cat.description}</Description>
              <FlexBox>
                <MetaDataContainer>
                  <Title>Information</Title>
                  <br />
                  <p>
                    <SubHeading>Life Span:</SubHeading> {cat.life_span} years
                  </p>
                  <Divider />
                  <br />
                  <p>
                    {" "}
                    <SubHeading>Origin:</SubHeading> {cat.origin}{" "}
                  </p>
                  <Divider />
                  <br />
                  <p>
                    {" "}
                    <SubHeading>Temperament:</SubHeading> {cat.temperament}
                  </p>
                  <Divider />
                  <br />
                  <p>
                    <SubHeading> Weight:</SubHeading> {cat.weight.metric} kgs (
                    {cat.weight.imperial} lbs)
                  </p>
                  <Divider />
                </MetaDataContainer>
                <MetaDataContainer>
                  <Title>Ratings (out of 5)</Title>
                  <br />
                  <p>
                    <SubHeading> Adaptability:</SubHeading>
                    <br /> {renderStars(cat.adaptability)}
                  </p>
                  <Divider />
                  <p>
                    {" "}
                    <SubHeading> Shedding level:</SubHeading>
                    <br /> {renderStars(cat.shedding_level)}
                  </p>
                  <Divider />
                  <p>
                    {" "}
                    <SubHeading> Social Needs: </SubHeading>
                    <br />
                    {renderStars(cat.social_needs)}
                  </p>
                  <Divider />
                  <p>
                    {" "}
                    <SubHeading>Intelligence:</SubHeading> <br />
                    {renderStars(cat.intelligence)}
                  </p>
                  <Divider />
                </MetaDataContainer>
              </FlexBox>
              <br />
              <Divider />
              <FlexBox>
                {cat.wikipedia_url && (
                  <a href={cat.wikipedia_url} target="_blank" rel="noreferrer">
                    Wikipedia
                  </a>
                )}
                <br />
                {cat.cfa_url && (
                  <a href={cat.cfa_url} target="_blank" rel="noreferrer">
                    Cat Fanciers' Association
                  </a>
                )}
                <br />
                {cat.vetstreet_url && (
                  <a href={cat.vetstreet_url} target="_blank" rel="noreferrer">
                    Vet Sreet
                  </a>
                )}
              </FlexBox>
            </CatInfoContainer>
          ))
        : null}
      <br />
    </>
  );
}

export default CatList;
