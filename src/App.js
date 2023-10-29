import styled from "styled-components";
import Header from "./component/Layout/Header";
import myImage from "./assets/lidye-1Shk_PkNkNw-unsplash.jpg"
import Main from "./component/Layout/Main";
import Cart from "./component/Cart/Cart";

const Wrapper = styled.div`
background-image: url(${myImage});
background-repeat: no-repeat;
background-size: 100% 100% ;
background-attachment: scroll;
background-position:center;
min-height: 100vh;
margin : 0px;
`

function App() {
  return (
    <Wrapper >
      <Cart />
      <Header />
      <Main />
    </Wrapper>
  );
}

export default App;
