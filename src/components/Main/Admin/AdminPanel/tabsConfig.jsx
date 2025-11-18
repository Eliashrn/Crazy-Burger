import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";
import HintMessage from "./HintMessage";
import { IoMdSettings } from "react-icons/io";

export const getTabsConfig = (hasAlreadyBeenClicked) => [
  {
    index: "add",
    label: "Ajouter un produit",
    Icon: <AiOutlinePlus />,
    Content: <AddProduct />,
  },
  {
    index: "edit",
    label: "Modifier un produit",
    Icon: <MdModeEditOutline />,
    Content: hasAlreadyBeenClicked ? <EditProduct /> : <HintMessage />,
  },

  {
    index: "manger",
    label: "Autre onglet",
    Icon: <IoMdSettings />,
    Content: Uncomposant(),
  },
];

export const getTabSelected = (tabs, currentTabSelected) =>
  tabs.find((tab) => tab.index === currentTabSelected);

export function Uncomposant() {
  return <div>Du contenu</div>;
}
