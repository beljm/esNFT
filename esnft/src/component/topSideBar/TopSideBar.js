import styled from 'styled-components';
import ConnectButton from '../../Web3/components/ConnectButton';
import Search from './Search';

const TopSideBarContainer = styled.header`
  display: flex;
  border-bottom: 1px solid;
  align-items: center;
  padding: 5px;
  height: 8vh;
`

const LogoContainer = styled.div`
  display: flex;
  /* border: 1px solid; */
  justify-content: center;
  align-items: center;
  width: 15%;
`

const SearchContainer = styled.div`
  display: flex;
  /* border: 1px solid; */
  justify-content: center;
  align-items: center;
  width: 60%;
`
const WalletContainer = styled.div`
  display: flex;
  /* border: 1px solid; */
  justify-content: flex-end;
  align-items: center;
  width: 25%;
  padding: 5px;
`

const LogoBox = styled.img`
  height: 60px;
  object-fit: cover;
`

const TopSideBar = () => {
  return (
    <TopSideBarContainer>
      <LogoContainer>
        <LogoBox src="/logo.png"/>
      </LogoContainer>
      <SearchContainer>
        <Search></Search>
      </SearchContainer>
      <WalletContainer>
        <ConnectButton/>
      </WalletContainer>      
    </TopSideBarContainer>
  );
}

export default TopSideBar;
