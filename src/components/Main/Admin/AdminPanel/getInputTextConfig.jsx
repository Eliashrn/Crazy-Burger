import { LuEuro } from "react-icons/lu";
import { MdPhotoCamera } from "react-icons/md";
import { PiHamburgerFill } from "react-icons/pi";

export const getInputTextConfig = (newProduct, handleChange) => [
  {
    id: "0",
    name: "title",
    value: newProduct.title ? newProduct.title : "",
    type: "text",
    placeholder: "Nom du produit (ex: Super Burger)",
    onChange: handleChange,
    Icon: <PiHamburgerFill />,
    version: "extraStyleMinimalist",
  },
  {
    id: "1",
    name: "imageSource",
    value: newProduct.imageSource ? newProduct.imageSource : "",
    type: "text",
    placeholder:
      "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
    onChange: handleChange,
    Icon: <MdPhotoCamera />,
    version: "extraStyleMinimalist",
  },
  {
    id: "2",
    name: "price",
    value: newProduct.price ? newProduct.price : "",
    type: "text",
    placeholder: "Prix",
    onChange: handleChange,
    Icon: <LuEuro />,
    version: "extraStyleMinimalist",
  },
];
