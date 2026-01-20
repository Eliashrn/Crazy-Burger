import { FiPackage } from "react-icons/fi";
import { LuEuro } from "react-icons/lu";
import { MdPhotoCamera } from "react-icons/md";
import { PiHamburgerFill } from "react-icons/pi";

export const getInputTextConfig = (newProduct) => [
  {
    id: "0",
    name: "title",
    value: newProduct.title ? newProduct.title : "",
    type: "text",
    placeholder: "Nom du produit (ex: Super Burger)",
    Icon: <PiHamburgerFill />,
    version: "extraStyleMinimalist",
    classeName: "title",
  },
  {
    id: "1",
    name: "imageSource",
    value: newProduct.imageSource ? newProduct.imageSource : "",
    type: "text",
    placeholder:
      "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
    Icon: <MdPhotoCamera />,
    version: "extraStyleMinimalist",
    classeName: "image-source",
  },
  {
    id: "2",
    name: "price",
    value: newProduct.price ? newProduct.price : "",
    type: "text",
    placeholder: "Prix",
    Icon: <LuEuro />,
    version: "extraStyleMinimalist",
    classeName: "price",
  },
  // {
  //   id: "3",
  //   name: "En stock",
  //   type: "checkbox",
  //   Icon: <FiPackage />,
  // },
];
