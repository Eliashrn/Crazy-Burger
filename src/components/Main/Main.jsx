import styled from "styled-components";
import { theme } from "../../theme";
import Menu from "./Menu";

export default function Main() {
  // const [products, setProducts] = useState(fakeMenu1);

  return (
    <MainStyled>
      {/* <div className="basket">basket</div> */}
      <Menu />
    </MainStyled>
  );
}

const MainStyled = styled.div`
  background: ${theme.colors.background_white};
  height: 85vh;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

  display: grid;
  grid-template-columns: 1fr;
  overflow: hidden;
  /* 
  .basket {
    background: pink;
  } */
`;
