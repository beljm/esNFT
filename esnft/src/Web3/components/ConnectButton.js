import styled from "styled-components";

const WebConnectButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 200px;
  height: 30px;

  border: 1px solid;
  border-radius: 15px;
  border-color: black;

  font-size: 2ch;
  font-weight: bold;
  margin-right: 50px;
`

const ConnectButton = () =>{
  return (
    <WebConnectButton>Connect</WebConnectButton>
  )
}

export default ConnectButton;