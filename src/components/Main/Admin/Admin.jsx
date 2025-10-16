import styled from "styled-components";
import AdminTabs from "./AdminTabs";
import AdminPanel from "./AdminPanel";
import { useState } from "react";

export default function Admin() {
  const [isCollapsed, setCollapsed] = useState(false);

  return (
    <AdminStyles>
      <AdminTabs isCollapsed={isCollapsed} setCollapsed={setCollapsed} />
      {!isCollapsed && <AdminPanel />}
    </AdminStyles>
  );
}

const AdminStyles = styled.div`
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
`;
