import styled from "styled-components";
import { theme } from "../../../theme";
import Card from "../../Reusable-ui/Card";
import { formatPrice } from "../../../utils/maths";
import { useContext } from "react";
import OrderContext from "../../../context/OrderContext";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";

export default function Menu() {
  useContext(OrderContext);
  const {
    menu,
    isModeAdmin,
    handleDelete,
    restMenu,
    setIsProductSelected,
    isProductSelected,
  } = useContext(OrderContext);

  const handleClick = (idProductSelected) => {
    if (!isModeAdmin) return;
    const productClickedOn = menu.find(
      (product) => product.id === idProductSelected
    );
    setIsProductSelected(productClickedOn);
  };

  const checkIfProductIsClicked = (idProductInmenu, isProductClickedon) => {
    return idProductInmenu === isProductClickedon;
  };

  if (menu.length === 0) {
    if (!isModeAdmin) {
      return <EmptyMenuClient />;
    }
    return <EmptyMenuAdmin restMenu={restMenu} />;
  }

  const handleCardDelete = (e, id) => {
    e.stopPropagation();
    handleDelete(id);
  };

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
            onDelete={(e) => handleCardDelete(e, id)}
            onClick={() => handleClick(id)}
            isHoverable={isModeAdmin}
            isSelected={checkIfProductIsClicked(id, isProductSelected.id)}
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
