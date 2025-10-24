import styled from "styled-components";
import { theme } from "../../theme";
import Card from "../Reusable-ui/Card";
import { formatPrice } from "./../../utils/maths";
import { useContext } from "react";
import OrderContext from "../../context/OrderContext";

export default function Menu() {
  useContext(OrderContext);
  const { menu, isModeAdmin, onDelete } = useContext(OrderContext);

  return (
    <MenuStyled className="menu">
      {menu.map(({ id, title, imageSource, price }) => {
        return (
          <Card
            key={id}
            title={title}
            imageSource={
              imageSource === "" ? "/image/coming-soon.png" : imageSource
            }
            leftDescription={formatPrice(price)}
            hasDelete={isModeAdmin}
            onClick={() => onDelete(id)}
          />
        );
      })}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-columns: repeat(auto-fit, minmax(300px 1fr));
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  overflow-y: scroll;
`;
