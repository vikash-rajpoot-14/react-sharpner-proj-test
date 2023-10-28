import styled from "styled-components";
import Header from "./component/Layout/Header";
import myImage from "./assets/lidye-1Shk_PkNkNw-unsplash.jpg"
import Main from "./component/Layout/Main";

const Wrapper = styled.div`
margin : 0px
`

function App() {
  return (
    <Wrapper >
      <Header/>
      <Main />
    </Wrapper>
  );
}

export default App;
