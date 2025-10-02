import { Link, useParams } from "react-router";
import Logo from "./Logo";
import { BsPersonCircle } from "react-icons/bs";
import styled from "styled-components";

const Navbar = () => {
  const { inputAss } = useParams();
  return (
    <StyledNavbar>
      <div className="left-side">
        <a href="/">
          <Logo className="logo" />
        </a>
      </div>
      <div className="right-side">
        <h2>Hey {inputAss}</h2>

        <Link to="/">
          <button>Se déconnecter</button>
        </Link>
        <BsPersonCircle />
      </div>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.nav`
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
  justify-content: space-between;

  .left-side {
    logo {
      font-size: 2rem;
    }
  }

  .right-side {
    display: flex;
    align-items: center;
  }
`;

export default Navbar;
