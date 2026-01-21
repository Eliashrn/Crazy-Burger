import { FiPackage } from "react-icons/fi";
import { LuEuro } from "react-icons/lu";
import { MdPhotoCamera } from "react-icons/md";
import { PiHamburgerFill } from "react-icons/pi";
import {
  isAvailableOption,
  isPublicisedOption,
} from "../../../../../../../enums/select";

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
];

export const getSelectTextConfig = (newProduct) => [
  {
    id: "3",
    name: "isAvailable",
    value: newProduct.isAvailable,
    classeName: "is-available",
    options: isAvailableOption,
  },
  {
    id: "4",
    name: "isPublicised",
    value: newProduct.isPublicised,
    classeName: "is-publicised",
    options: isPublicisedOption,
  },
];
