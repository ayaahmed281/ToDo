import styled from "@emotion/styled";
export const BurgerMenu = styled.div`
  text-align: left;
  width: 80%;
  margin-top: 12px;
  svg {
    width: 50px;
    height: 50px;
  }
`;
export const Header = styled.header`
  width: 80%;
  background: none;

  .desc {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-left: 10px;
    color: black;
  }
  svg {
    position: absolute;
    right: 25px;
    top: 60px;
  }
  .logo {
  }
  .desc {
  }
`;
