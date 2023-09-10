import styled from "styled-components";
import Flex from "../../styles/Flex";

// Home Style
export const HomeImage = styled.div`
  width: 100%;
  text-align: center;
  margin: 2rem;
  img {
    width: 45%;
    height: 400px;
    border-radius: 1rem;
  }
`;

export const HomeContainer = styled(Flex)`
  flex-direction: column;
`;