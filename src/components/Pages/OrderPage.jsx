import styled from "styled-components";
import { useParams } from "react-router";
import Main from "../Reusable-ui/Main";
import Navbar from "./Navbar";

const OrderPage = () => {
  const { inputAss } = useParams();
  return (
    <OrderPageStyled>
      <div className="container">
        <Navbar username={inputAss} />
        <Main />
      </div>
    </OrderPageStyled>
  );
};

const OrderPageStyled = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background: orange;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .container {
    background: red;
    height: 95vh;
    width: 1400px;
  }
`;

export default OrderPage;
