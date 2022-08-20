import styled from "styled-components";
import List from "./List";
import LinkIcon from "./LinkIcon";
import { BsCollection } from "react-icons/bs"
import { FaShoppingBag } from "react-icons/fa"

const LeftSideBarContainer = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 15%;
  height: 90vh;
  border-right: 1px solid;
  /* padding: 10px; */
`

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 95%;
`

const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  height: 5%;
  border-top: 1px solid;
  margin: 10px;
`

const LeftSideBar = () => {
  let listObj = [{name: 'Market', icon: <FaShoppingBag/>}, {name: 'Collection', icon: <BsCollection/>}]

  return (
    <LeftSideBarContainer>
      <ListContainer>
        {
          listObj.map((ele)=>{
            return (
              <List key={ele.name} content={ele}></List>
            )
          })
        }
        
      </ListContainer>      
      <SocialContainer>
        <LinkIcon></LinkIcon>
      </SocialContainer>
    </LeftSideBarContainer>
  );
}

export default LeftSideBar;