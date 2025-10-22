import React from "react";
import { PiHamburgerFill } from "react-icons/pi";
import { MdPhotoCamera } from "react-icons/md";
import { LuEuro } from "react-icons/lu";
import styled from "styled-components";

export default function AddProduct() {
  return (
    <FormStyled>
      <div className="image-preview">image preview</div>
      <div className="input-fields">
        <input type="text" placeholder="Product Name" />
        <input type="text" placeholder="Product Description" />
        <input type="text" placeholder="Product Price" />
      </div>
      <div className="submit-button">submit</div>
    </FormStyled>
  );
}

const FormStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  height: 100%;
  width: 70%;

  .image-preview {
    grid-area: 1 / 1 / 4 / 2;
    background: blue;
  }

  .input-fields {
    background: green;
    grid-area: 1 / 2 / -2 / 3;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
  }

  .submit-button {
    grid-area: 4 / -2 / -1 / -1;
    background: orange;
  }
`;
