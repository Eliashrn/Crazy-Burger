import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const OrderPage = () => {
  const { inputAss } = useParams();

  return (
    <OrderPageStyled>
      <div className="container">
        <div className="navbar">
          <h1>Bonjour {inputAss}</h1>
          <Link to="/">
            <button>Déconnexion</button>
          </Link>
        </div>
        <div className="content">
          <h2>Order Page Content Here</h2>
        </div>
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

  .navbar {
    background: blue;
    height: 10vh;
  }

  .content {
    background: green;
    height: 85vh;
  }
`;

export default OrderPage;
