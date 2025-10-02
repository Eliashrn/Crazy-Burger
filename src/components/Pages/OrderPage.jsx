import { Link, useParams } from "react-router-dom";
import Navbar from "../Reusable-ui/Navbar";
import styled from "styled-components";

const OrderPage = () => {
  const { inputAss } = useParams();

  return (
    <OrderPageStyled>
      <div className="container">
        <h1>Bonjour {inputAss}</h1>

        <Link to="/">
          <button>Déconnexion</button>
        </Link>
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
