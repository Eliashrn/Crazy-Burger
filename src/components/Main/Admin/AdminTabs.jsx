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

  const selectTab = (tabSelected) => {
    setCollapsed(false);

    if (tabSelected === "add") {
      setisAddSelective(true);
      setisEditSelected(false);
    }

    if (tabSelected === "edit") {
      setisEditSelected(true);
      setisAddSelective(false);
    }
  };

  const tabConfig = [
    {
      label: "",
      Icon: isCollapsed ? <FiChevronUp /> : <FiChevronDown />,
      onClick: () => setCollapsed(!isCollapsed),
      className: isCollapsed ? "is-active" : "",
    },

    {
      label: "Ajouter un produit",
      Icon: <AiOutlinePlus />,
      onClick: () => selectTab("add"),
      className: isAddSelective ? "is-active" : "",
    },
    {
      label: "Modifier un produit",
      Icon: <MdModeEditOutline />,
      onClick: () => selectTab("edit"),
      className: isEditSelected ? "is-active" : "",
    },
  ];

  return (
    <AdminTabsStyled>
      {tabConfig.map((tab) => {
        return (
          <Tabs
            label={tab.label}
            Icon={tab.Icon}
            onClick={tab.onClick}
            className={tab.className}
          />
        );
      })}
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
