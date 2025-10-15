import React from "react";
import styled from "styled-components";
import { theme } from "../../../theme";
import AdminTabs from "./AdminTabs";
import AdminPanel from "./AdminPanel";

export default function Admin() {
  return (
    <AdminStyles>
      <AdminTabs />
      <AdminPanel />
    </AdminStyles>
  );
}

const AdminStyles = styled.div`
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
`;
