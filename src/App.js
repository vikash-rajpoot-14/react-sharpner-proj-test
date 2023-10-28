import styled from "styled-components";
import Header from "./component/Layout/Header";
import myImage from "./assets/lidye-1Shk_PkNkNw-unsplash.jpg"
import Main from "./component/Layout/Main";

const Wrapper = styled.div`
background-image: url(${myImage});
background-repeat: no-repeat;
background-size: cover;
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
