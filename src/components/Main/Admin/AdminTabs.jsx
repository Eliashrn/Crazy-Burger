import styled from "styled-components";
import Tabs from "../../Reusable-ui/Tabs";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { theme } from "../../../theme";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { useContext } from "react";
import OrderContext from "../../../context/OrderContext";
import { tabsConfig } from "./AdminPanel/tabsConfig";

export default function AdminTabs() {
  const {
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
  } = useContext(OrderContext);

  const selectTab = (tabSelected) => {
    setIsCollapsed(false); // ouvre moi le panel dans tous les cas
    setCurrentTabSelected(tabSelected); // réactualise l'onglet sélectionné
  };

  const tabs = tabsConfig;

  // affichage
  return (
    <AdminTabsStyled>
      <Tabs
        Icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={isCollapsed ? "is-active" : ""}
      />
      {tabs.map((tab) => (
        <Tabs
          key={tab.index}
          label={tab.label}
          Icon={tab.Icon}
          onClick={() => selectTab(tab.index)}
          className={currentTabSelected === tab.index ? "is-active" : ""}
        />
      ))}
    </AdminTabsStyled>
  );
}

const AdminTabsStyled = styled.div`
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
