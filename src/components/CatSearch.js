import { useEffect, useState } from "react";
import axios from "axios";
import {
  SearchBarContainer,
  SearchBar,
  SearchTitle,
} from "../styles/CatSearchStyles";

function CatSearch({ searchBreed }) {
  const [breeds, setBreeds] = useState([]);

  // LOAD SEARCH OPTIONS
  useEffect(() => {
    axios
      .get("https://api.thecatapi.com/v1/breeds")
      .then((res) => setBreeds(res.data));
  }, []);

  // FIND FOR THE CAT THE USER SEARCHED FOR AND PASS ITS ID TO THE SEARCH FUNCTION IN
  // CATBREEDINFO COMPONENT
  const handleSelection = (e) => {
    const selectedCat = breeds.find((cat) => cat.name === e.target.value);
    searchBreed(selectedCat.id);
  };

  return (
    <>
      {breeds.length > 0 ? (
        <SearchBarContainer>
          <SearchTitle>Select A Cat Below</SearchTitle>
          <SearchBar onChange={handleSelection}>
            {breeds.map((breed, index) => (
              <option key={index}>{breed.name}</option>
            ))}
          </SearchBar>
        </SearchBarContainer>
      ) : null}
    </>
  );
}

export default CatSearch;
