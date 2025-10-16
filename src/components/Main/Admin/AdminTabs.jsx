import styled from "styled-components";
import Tabs from "../../Reusable-ui/Tabs";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { theme } from "../../../theme";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { useContext } from "react";
import OrderContext from "../../../context/OrderContext";

export default function AdminTabs() {
  const {
    isCollapsed,
    setCollapsed,
    isAddSelective,
    setisAddSelective,
    isEditSelected,
    setisEditSelected,
  } = useContext(OrderContext);

  const selectAdd = () => {
    setCollapsed(false);
    setisEditSelected(false);
    setisAddSelective(true);
  };

  const selectModif = () => {
    setCollapsed(false);
    setisEditSelected(true);
    setisAddSelective(false);
  };

  return (
    <AdminTabsStyled>
      <Tabs
        label=""
        Icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
        onClick={() => setCollapsed(!isCollapsed)}
        className={isCollapsed ? "is-active" : ""}
      />
      <Tabs
        label="Ajouter un produit"
        Icon={<AiOutlinePlus />}
        onClick={selectAdd}
        className={isAddSelective ? "is-active" : ""}
      />
      <Tabs
        label="Modifier un produit"
        Icon={<MdModeEditOutline />}
        onClick={selectModif}
        className={isEditSelected ? "is-active" : ""}
      />
    </AdminTabsStyled>
  );
}

const AdminTabsStyled = styled.div`
  /* border: 1px solid red; */
  display: flex;

  .is-active {
    background: ${theme.colors.background_dark};
    border-color: ${theme.colors.background_dark};
    color: ${theme.colors.white};
    border-bottom: 2px;
  }

  button {
    margin-left: 1px;
  }
`;
