import styled from "styled-components";
import Tabs from "../../Reusable-ui/Tabs";
import { FiChevronDown } from "react-icons/fi";

export default function AdminTabs({ show, setShow }) {
  return (
    <AdminTabsStyled>
      <Tabs Icon={<FiChevronDown />} onClick={() => setShow(!show)} />
    </AdminTabsStyled>
  );
}

const AdminTabsStyled = styled.div`
  /* border: 1px solid red; */
  display: flex;
  padding: 0 20px;
`;
