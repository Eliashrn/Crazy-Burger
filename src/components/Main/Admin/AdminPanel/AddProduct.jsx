import React, { useContext, useState } from "react";
import { PiHamburgerFill } from "react-icons/pi";
import { MdPhotoCamera } from "react-icons/md";
import { LuEuro } from "react-icons/lu";
import styled from "styled-components";
import OrderContext from "../../../../context/OrderContext";
import { FiCheck } from "react-icons/fi";
import { theme } from "../../../../theme";
import Input from "../../../Reusable-ui/Input";

const EMPTY_PRODUCT = {
  title: "",
  imageSource: "",
  price: "",
};

export default function AddProduct() {
  //State
  const { handleAddProduct } = useContext(OrderContext);

  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [successSubmit, setSuccessSubmit] = useState(false);

  //Comportements

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddProduct(newProductToAdd);
    setNewProduct(EMPTY_PRODUCT);
    succesSubmit();
  };

  const succesSubmit = () => {
    setSuccessSubmit(true);
    setTimeout(() => {
      setSuccessSubmit(false);
    }, 2000);
  };

  const newProductToAdd = {
    id: crypto.randomUUID(),
    ...newProduct,
  };

  //Render

  return (
    <FormStyled onSubmit={handleSubmit}>
      <div className="image-preview">
        {newProduct.imageSource ? (
          <img src={newProduct.imageSource} alt={newProduct.title} />
        ) : (
          <div className="empty-image">image preview</div>
        )}
      </div>
      <div className="input-fields">
        <Input
          name="title"
          value={newProduct.title ? newProduct.title : ""}
          type="text"
          placeholder="Nom du produit (ex: Super Burger)"
          onChange={handleChange}
          Icon={<PiHamburgerFill />}
          version="minimalistStyles"
        />
        <Input
          name="imageSource"
          value={newProduct.imageSource ? newProduct.imageSource : ""}
          type="text"
          placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
          onChange={handleChange}
          Icon={<MdPhotoCamera />}
          version="minimalistStyles"
        />
        <Input
          name="price"
          value={newProduct.price ? newProduct.price : ""}
          type="text"
          placeholder="Prix"
          onChange={handleChange}
          Icon={<LuEuro />}
          version="minimalistStyles"
        />
      </div>
      <div className="submit-button">
        <button>Submit</button>
        {successSubmit && (
          <div>
            <span>
              <FiCheck />{" "}
            </span>
            <span>Produit ajouté avec succès</span>
          </div>
        )}
      </div>
    </FormStyled>
  );
}

const FormStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  height: 100%;
  width: 70%;
  grid-column-gap: 20px;
  grid-row-gap: 8px;

  .image-preview {
    grid-area: 1 / 1 / 4 / 2;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }

    .empty-image {
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid ${theme.colors.greyLight};
      line-height: 1.5;
      color: ${theme.colors.greySemiDark};
      border-radius: ${theme.borderRadius.round};
    }
  }

  .input-fields {
    grid-area: 1 / 2 / -2 / 3;
    display: grid;
  }

  .submit-button {
    grid-area: 4 / -2 / -1 / -1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`;
