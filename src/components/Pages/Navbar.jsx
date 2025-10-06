import { Link, useParams } from "react-router";
import Logo from "../Reusable-ui/Logo";
import styled from "styled-components";
import Profile from "./Profile";
import { theme } from "../../theme";

const Navbar = () => {
  const { inputAss } = useParams();
  return (
    <StyledNavbar>
      <Logo />

      <div className="right-side">
        {/* <div className="admin-button">Admin button</div> */}
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
