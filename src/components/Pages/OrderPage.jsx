import { Link, useParams } from "react-router-dom";

const OrderPage = () => {
  const { inputAss } = useParams();

  return (
    <>
      <h1>Bonjour {inputAss}</h1>

      <Link to="/">
        <button>Déconnexion</button>
      </Link>
    </>
  );
};

export default OrderPage;
