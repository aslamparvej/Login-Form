import Login from "./components/Login/Login";

import Styled from "styled-components";

const Container = Styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F5F5F5;
  font-family: sans-serif;
`;

function App() {
  return (
    <Container>
      <Login />
    </Container>
  );
}

export default App;
