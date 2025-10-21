import styled from "styled-components";
import { theme } from "../../../theme";
import { useContext } from "react";
import OrderContext from "../../../context/OrderContext";
import { getTabSelected, tabsConfig } from "./tabsConfig";
import AddProduct from "./AddProduct";

export default function AdminPanel() {
  const { currentTabSelected } = useContext(OrderContext);

  const tabs = tabsConfig;
  const tabSelected = getTabSelected(tabs, currentTabSelected);

  return (
    <AdminPanelStyled>
      <div className="content">
        {tabSelected.index === "add" && <AddProduct />}
        {tabSelected.index === "edit" && <div>Formulaire de modification</div>}
      </div>
    </AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  height: 250px;
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
`;
