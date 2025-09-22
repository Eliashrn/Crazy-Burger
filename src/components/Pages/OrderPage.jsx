import { Link, useParams } from "react-router-dom";

const OrderPage = () => {
  const { username } = useParams();

  return (
    <>
      <h1>Bonjour {username}</h1>

      <Link to="/">
        <button>Déconnexion</button>
      </Link>
    </>
  );
};

export default OrderPage;
