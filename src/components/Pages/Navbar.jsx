import { Link, useParams } from "react-router";
import Logo from "../Reusable-ui/Logo";
import styled from "styled-components";

const Navbar = () => {
  const { inputAss } = useParams();
  return (
    <StyledNavbar>
      <Logo />

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
  padding: 0 20px;

  .right-side {
    background: purple;
  }
`;

export default Navbar;
