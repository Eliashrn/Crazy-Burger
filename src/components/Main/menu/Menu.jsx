import styled from "styled-components";
import { theme } from "../../../theme";
import Card from "../../Reusable-ui/Card";
import { formatPrice } from "../../../utils/maths";
import { useContext } from "react";
import OrderContext from "../../../context/OrderContext";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";
import { EMPTY_PRODUCT } from "../../../enums/product.jsx";

export default function Menu() {
  useContext(OrderContext);
  const {
    menu,
    isModeAdmin,
    handleDelete,
    restMenu,
    setIsProductSelected,
    isProductSelected,
    setIsCollapsed,
    setCurrentTabSelected,
    titleEdithBox,
  } = useContext(OrderContext);

  const handleClick = async (idProductSelected) => {
    if (!isModeAdmin) return;

    await setIsCollapsed(false);
    await setCurrentTabSelected("edit");
    const productClickedOn = menu.find(
      (product) => product.id === idProductSelected
    );
    await setIsProductSelected(productClickedOn);
    titleEdithBox.current.focus();
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

  const handleCardDelete = (e, idPrductToDelete) => {
    e.stopPropagation();
    handleDelete(idPrductToDelete);
    idPrductToDelete === isProductSelected.idPrductToDelete &&
      setIsProductSelected(EMPTY_PRODUCT);
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
            ishoverable={isModeAdmin}
            isselected={checkIfProductIsClicked(id, isProductSelected.id)}
          />
        );
      })}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* grid-template-columns: repeat(auto-fit, minmax(300px 1fr)); */
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  overflow-y: scroll;
`;
