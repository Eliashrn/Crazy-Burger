import styled from "styled-components";
import Tabs from "../../Reusable-ui/Tabs";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { theme } from "../../../theme";
import { AiOutlinePlus } from "react-icons/ai";

export default function AdminTabs({ isCollapsed, setCollapsed }) {
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
        onClick={() => setCollapsed(!isCollapsed)}
        className={isCollapsed ? "is-active" : ""}
      />
    </AdminTabsStyled>
  );
}

const AdminTabsStyled = styled.div`
  /* border: 1px solid red; */
  display: flex;
  padding: 0 20px;

  .is-active {
    background: ${theme.colors.background_dark};
    border-color: ${theme.colors.background_dark};
    color: ${theme.colors.white};
  }

  button {
    margin-left: 1px;
  }
`;
