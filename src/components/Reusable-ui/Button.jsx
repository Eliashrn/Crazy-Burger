import React from "react";
import { IoChevronForwardCircleSharp } from "react-icons/io5";
import styled from "styled-components";

export default function Button({ label, Icon }) {
  return (
    <StyledButton>
      <span>{label}</span>
      {Icon && Icon}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  background: #f56a2c;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #f56a2c;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  white-space: nowrap;
  text-decoration: none;
  line-height: 1;
  padding: 18px 24px;
  cursor: pointer;
  font-size: 15px;

  span {
    color: white;
    font-weight: bold;
    margin-right: 8px;
  }

  }
  position: relative;
  white-space: nowrap;
  text-decoration: none;
  line-height: 1;
  padding: 18px 24px;
  cursor: pointer;
  font-size: 15px;

  span {
    color: white;
    font-weight: bold;
    margin-right: 8px;
  }
  .icon {
    font-size: 20px;
  }
`;
