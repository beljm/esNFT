import styled from "styled-components";
import { GoSearch } from "react-icons/go";

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 25px;
  border: 1px solid;
  border-radius: 10px;
  padding: 5px;
  
`

const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  /* border: 1px solid; */
  width: 5%;
  margin-right: 2px;
`

const TextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25px;
  /* border: 1px solid; */
  width: 95%;
`

const Input = styled.input`
  height: 23px;
  border: none;
  width: 100%;
`

const Search = () => {
  return (
    <SearchContainer>
      <IconBox><GoSearch/></IconBox>
      <TextBox>
        <Input></Input>
      </TextBox>
    </SearchContainer>
  );
}

export default Search;