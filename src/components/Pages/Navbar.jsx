import { Link, useParams } from "react-router";
import Logo from "../Reusable-ui/Logo";
import styled from "styled-components";
import Profile from "./Profile";
import { theme } from "../../theme";
import ToggleButton from "../Reusable-ui/ToggleButton.jsX";

const Navbar = () => {
  const { inputAss } = useParams();
  return (
    <StyledNavbar>
      <Logo
        className="logo-order-page"
        onClick={() => window.location.reload()}
      />

      <div className="right-side">
        <ToggleButton
          labelIfUnchecked="ACTIVER LE MODE ADMIN"
          labelIfChecked="DÉSACTIVER LE MODE ADMIN"
        />
        <Profile username={inputAss} />
        <div className="picture"></div>
      </div>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.nav`
  background: ${theme.colors.white};
  height: 10vh;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  border-top-left-radius: ${theme.borderRadius.extraRound};
  border-top-right-radius: ${theme.borderRadius.extraRound};

  .logo-order-page {
    cursor: pointer;
  }

  .right-side {
    display: flex;
    align-items: center;
    padding-right: 50px;
  }

  /* .admin-button {
    background: lightblue;
  } */

  .profile {
    background: yellow;
  }
`;

export default Navbar;
