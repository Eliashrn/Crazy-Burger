import styled from "styled-components";
import { theme } from "../../../theme";
import Card from "../../Reusable-ui/Card";
import { formatPrice } from "../../../utils/maths";
import { useContext } from "react";
import OrderContext from "../../../context/OrderContext";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";
import { EMPTY_PRODUCT, IMAGE_BY_DEFAULT } from "../../../enums/product.jsx";

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
    handleAddToBasket,
    handleDeleteFromBasket,
  } = useContext(OrderContext);

  const handleClick = async (idProductSelected) => {
    if (!isModeAdmin) return;

    const productClickedOn = menu.find(
      (product) => product.id === idProductSelected
    );
    await setIsCollapsed(false);
    await setCurrentTabSelected("edit");
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
    handleDeleteFromBasket(idPrductToDelete);
    idPrductToDelete === isProductSelected.idPrductToDelete &&
      setIsProductSelected(EMPTY_PRODUCT);
    titleEdithBox.current.focus();
  };

  const handleAddButton = (e, id) => {
    e.stopPropagation();
    const productToAdd = menu.find((product) => product.id === id);
    handleAddToBasket(productToAdd);
  };

  return (
    <MenuStyled className="menu">
      {menu.map(({ id, title, imageSource, price }) => {
        return (
          <Card
            key={id}
            title={title}
            imageSource={imageSource === "" ? IMAGE_BY_DEFAULT : imageSource}
            leftDescription={formatPrice(price)}
            hasDelete={isModeAdmin}
            onDelete={(e) => handleCardDelete(e, id)}
            onClick={() => handleClick(id)}
            isHoverable={isModeAdmin}
            isSelected={checkIfProductIsClicked(id, isProductSelected.id)}
            onAdd={(e) => handleAddButton(e, id)}
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
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  overflow-y: scroll;
`;
