import { BsPersonCircle } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../theme";

export default function Profile() {
  const { username } = useParams();
  return (
    <ProfileStyled>
      <div className="info">
        <p>
          Hey, <b>{username}</b>
        </p>
        <Link to="/">
          <div className="description">
            <small>Se déconnecter</small>
          </div>
        </Link>
      </div>
      <div className="picture">
        <BsPersonCircle />
      </div>
    </ProfileStyled>
  );
}

const ProfileStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 100px;
  padding-left: 50px;
  font-family: "Open Sans", sans-serif;
  .info {
    text-align: right;
    margin-right: 10px;
    p {
      margin: 0;
      color: ${theme.colors.greyBlue};
      b {
        color: ${theme.colors.primary};
      }
    }
    a {
      text-decoration: none;
      .description {
        &:hover {
          text-decoration: underline;
          color: ${theme.colors.greyDark};
        }
        small {
          font-size: ${theme.fonts.XXS};
          color: ${theme.colors.greyBlue};
          font-weight: ${theme.fonts.weights.medium};
          text-decoration: none;
          bottom: 2px;
          position: relative;
        }
      }
    }
  }

  .picture {
    display: flex;
    height: 100%;
    font-size: 2rem;
    font-size: ${theme.fonts.P4};
    color: ${theme.colors.greyBlue};
  }
`;
