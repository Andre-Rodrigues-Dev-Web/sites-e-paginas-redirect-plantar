import styled from "styled-components";

const ThemePlantar = styled.div`
  background-color: ${(props) => props.backgroundColor};
  min-height: 100vh;
`;

const ContainerText = styled.div`
  text-align: center;
`;

export { ContainerText, ThemePlantar };
