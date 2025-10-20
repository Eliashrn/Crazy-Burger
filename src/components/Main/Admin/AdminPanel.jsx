import styled from "styled-components";
import { theme } from "../../../theme";
import { useContext } from "react";
import OrderContext from "../../../context/OrderContext";

export default function AdminPanel() {
  const { isAddSelective, isEditSelected } = useContext(OrderContext);

  return (
    <AdminPanelStyled className="panel-admin">
      {isAddSelective && "Ajouter un produit"}
      {isEditSelected && "Modifier un produit"}
    </AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  height: 250px;
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
`;
