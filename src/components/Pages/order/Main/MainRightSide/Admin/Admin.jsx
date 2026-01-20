import styled from "styled-components";
import AdminTabs from "./AdminTabs.jsx";
import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext.jsx";
import AdminPanel from "./AdminPanel/AdminPanel.jsx";

export default function Admin() {
  const { isCollapsed } = useContext(OrderContext);
  return (
    <AdminStyles>
      <AdminTabs />
      {!isCollapsed && <AdminPanel />}
    </AdminStyles>
  );
}

const AdminStyles = styled.div`
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  z-index: 2;
`;
