import { Link, useParams } from "react-router";
import Logo from "./Logo";
import { BsPersonCircle } from "react-icons/bs";
import styled from "styled-components";

const Navbar = () => {
  const { inputAss } = useParams();
  return (
    <StyledNavbar>
      <div className="left-side">left</div>
      <div className="right-side">
        <h2>Hey {inputAss}</h2>
        <Link to="/">
          <button>Se déconnecter</button>
        </Link>
      </div>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.nav`
  background: blue;
  height: 10vh;
  display: flex;
  justify-content: space-between;

  .left-side {
    background: pink;
  }

  .right-side {
    background: purple;
  }
`;

export default Navbar;
