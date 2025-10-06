import { Link, useParams } from "react-router";
import Logo from "../Reusable-ui/Logo";
import styled from "styled-components";
import Profile from "./Profile";

const Navbar = () => {
  const { inputAss } = useParams();
  return (
    <StyledNavbar username={inputAss}>
      <Logo />

      <div className="right-side">
        {/* <div className="admin-button">Admin button</div> */}
        <Profile />
        <div className="picture"></div>
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
