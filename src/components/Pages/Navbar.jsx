import { Link, useParams } from "react-router";
import Logo from "../Reusable-ui/Logo";
import styled from "styled-components";
import Profile from "./Profile";
import { theme } from "../../theme";
import ToggleButton from "../Reusable-ui/ToggleButton.jsX";
import { ToastContainer, toast } from "react-toastify";
import { useContext } from "react";
import { FaUserSecret } from "react-icons/fa";
import OrderContext from "../../context/OrderContext";

const Navbar = () => {
  const { isAdmin, setIsAdmin } = useContext(OrderContext);

  const notify = () => {
    if (!isAdmin) {
      toast.info("Mode admin activé", {
        icon: <FaUserSecret size={30} />,
        theme: "dark",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    setIsAdmin(!isAdmin);
  };

  const { inputAss } = useParams();
  return (
    <StyledNavbar>
      <Logo
        className="logo-order-page"
        onClick={() => window.location.reload()}
      />

      <div className="right-side">
        <ToggleButton
          isChecked={isAdmin}
          labelIfUnchecked="ACTIVER LE MODE ADMIN"
          labelIfChecked="DÉSACTIVER LE MODE ADMIN"
          onToggle={notify}
        />
        <Profile username={inputAss} />
        <ToastContainer className="toaster" bodyClassName="body-toast" />
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

  .toaster {
    max-width: 300px;
  }

  .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
    background: ${theme.colors.background_dark};
  }

  .body-toast {
    .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
      margin-right: 20px;
      margin-left: 5px;
    }
    div {
      line-height: 1.3em;
    }
  }
`;

export default Navbar;
