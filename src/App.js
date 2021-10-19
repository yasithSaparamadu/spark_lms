import styled from "styled-components";

const Tilte = styled.h1`
  font-sizes: 3em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 6em;
  background: yellow;
`;

function App() {
  return (
    <Wrapper>
      <Tilte>It's gonna be awsome!</Tilte>
    </Wrapper>
  );
}

export default App;
