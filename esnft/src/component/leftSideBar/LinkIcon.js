import styled from 'styled-components';
import {FaTwitter, FaFacebook, FaLinkedin, FaLink} from 'react-icons/fa'

const LinkedIcon = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 2.5ch;
  padding: 10px;
  margin-top: 5px;  
  /* border: 1px solid; */
`

const LinkIcon = () => {
  return (
    <>
      <LinkedIcon href="https://twitter.com" target="_black" ><FaTwitter/></LinkedIcon>
      <LinkedIcon href="https://www.facebook.com" target="_black"><FaFacebook/></LinkedIcon>
      <LinkedIcon href="https://kr.linkedin.com" target="_black"><FaLinkedin/></LinkedIcon>
      <LinkedIcon href="https://urclass.codestates.com/" target="_black"><FaLink/></LinkedIcon>
    </>
  )
}

export default LinkIcon;