import React from "react";
import Input from "../../../Reusable-ui/Input";
import { PiHamburgerFill } from "react-icons/pi";
import { MdPhotoCamera } from "react-icons/md";
import { LuEuro } from "react-icons/lu";
import styled from "styled-components";

export default function AddProduct() {
  return (
    <FormStyled>
      <div className="left">
        <div className="img-container">
          <img src="" alt="" />
        </div>
      </div>
      <div className="right-side">
        <Input
          placeholder="Nom du produit (ex: Super Burger)"
          Icon={<PiHamburgerFill className="icon" />}
        />
        <Input
          placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
          Icon={<MdPhotoCamera className="icon" />}
        />
        <Input placeholder="Prix" Icon={<LuEuro className="icon" />} />
      </div>
    </FormStyled>
  );
}

const FormStyled = styled.form`
  .right-side {
    background: #fff;
    border-radius: 5px;
    display: grid;
  }
`;
