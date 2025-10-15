import { useState } from "react";
import styled from "styled-components";
import AdminTabs from "./AdminTabs";
import AdminPanel from "./AdminPanel";

export default function Admin() {
  const [show, setShow] = useState(false);
  return (
    <AdminStyles>
      <AdminTabs show={show} setShow={setShow} />
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
