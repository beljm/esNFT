import styled from "styled-components";

const ListBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid; */
  border-bottom: 1px solid;
  width: 100%;
  height: 70px;

  :hover{
    background-color: gray;
  }
`;

const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid; */
  width: 20%;
  height: 100%;

  font-size: 3ch;
  font-weight: 600;
`

const TextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid; */
  width: 60%;
  height: 100%;

  font-size: 3ch;
  font-weight: 600;
`

const List = ({ content }) => {
  return (
    <ListBox>
      <IconBox>{content.icon}</IconBox>
      <TextBox>{content.name}</TextBox>
    </ListBox>
  );
}

export default List;