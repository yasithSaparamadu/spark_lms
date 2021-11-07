import { React, useState } from "react/cjs/react.development";
import styled from "styled-components";

export const TabsContainer = styled.div`
  overflow: hidden;
  background: #fff;
  heaight: 100%;
  width: 100%;
`;

const TabButtonContainer = styled.div`
  display: flex;

  > * {
    flex: 1 1 0;
    max-width: 10em;
  }
`;

export const Tab = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  position: relative;
  font-size: 1em;
  border: ${(props) => (props.active ? "" : "1px solid #ccc")};
  border-button: none;
  background-color: ${(props) =>
    props.active ? props.theme.primary.main : "#fff"};
  height: 3em;
  color: ${(props) => props.theme.primary.textColor};
  border-top-left-radius: 1em;
  border-top-right-radius: 1em;
  :hover {
    background-color: ${(props) => props.theme.primary.ligt};
  }
`;

export const TabContents = styled.div`
  border: 0.25em solid ${(props) => props.theme.primary.main};
  border-top: 0.5em solid ${(props) => props.theme.primary.main};
  border-top-right-radius: 1em;
  border-bottom-right-radius: 1em;
  border-bottom-left-radius: 1em;
  min-height: 80vh;
`;

export const Content = styled.div`
  ${(props) => (props.active ? "" : "display: none")};
`;

export default function Tabs(props) {
  const { contents } = props;

  const [active, setActive] = useState(0);

  const handleClick = (event) => {
    const index = parseInt(event.target.id, 0);
    if (index !== active) {
      setActive(index);
    }
  };

  return (
    <TabsContainer>
      <TabButtonContainer>
        {contents.map((content, index) => (
          <Tab onClick={handleClick} active={active === index} id={index}>
            {content.title}
          </Tab>
        ))}
      </TabButtonContainer>
      <TabContents>
        {contents.map((content, index) => (
          <Content active={active === index}>{content.elements}</Content>
        ))}
      </TabContents>
    </TabsContainer>
  );
}
