import React from "react";
import { BsCloudCheck } from "react-icons/bs";
import styled from "styled-components";
import { theme } from "../../../../../../../theme";

export default function SaveMessage() {
  return (
    <SaveMessageStyled>
      <div className="icon">
        <BsCloudCheck />
      </div>
      <span className="message">Modifications enregistrées ! </span>
    </SaveMessageStyled>
  );
}

const SaveMessageStyled = styled.div`
  display: flex;
  color: ${theme.colors.blue};
  font-size: ${theme.fonts.size.SM};
  font-family: "Open Sans", sans-serif;

  .icon {
    font-size: ${theme.fonts.size.P2};
    display: flex;
    margin: 0 10px;
  }
`;
