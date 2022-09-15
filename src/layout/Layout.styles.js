import styled from "@emotion/styled";

import { bp } from "../assets/breakPoints";
import desktopBG from "../assets/images/full.png";
import mobileBG from "../assets/images/halfBg.png";

export const Container = styled.div`
  background-image: url(${mobileBG});
  background-color: #fdfdfd;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: #fdfdfd;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  ${bp.bigScreen} {
    background-image: url(${desktopBG});
  }
`;
export const Content = styled.div`
  min-height: 83vh;
  width: 100%;
  text-align: center;
`;
