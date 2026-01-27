import styled from "styled-components";
import { theme } from "../../../../../../theme";
import Card from "../../../../../Reusable-ui/Card.jsx";
import { formatPrice } from "../../../../../../utils/maths.js";
import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext.jsx";
import EmptyMenuAdmin from "./EmptyMenuAdmin.jsx";
import EmptyMenuClient from "./EmptyMenuClient.jsx";
import Loader from "./Loader.jsx";
import Ribbon from "../../../../../Reusable-ui/Ribbon.jsx";
import {
  EMPTY_PRODUCT,
  IMAGE_BY_DEFAULT,
  IMAGE_NO_STOCK,
} from "../../../../../../enums/product.jsx";
import { convertStringToBoolean } from "../../../../../../utils/string.js";

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
      (product) => product.id === idProductSelected,
    );
    await setIsCollapsed(false);
    await setCurrentTabSelected("edit");
    await setIsProductSelected(productClickedOn);
    titleEdithBox.current.focus();
  };

  const checkIfProductIsClicked = (idProductInmenu, isProductClickedon) => {
    return idProductInmenu === isProductClickedon;
  };

  if (menu === undefined) return <Loader />;

  if (menu.length === 0) {
    if (!isModeAdmin) {
      return <EmptyMenuClient />;
    }
    return <EmptyMenuAdmin restMenu={() => restMenu()} />;
  }

  const handleCardDelete = (e, idPrductToDelete) => {
    e.stopPropagation();
    handleDelete(idPrductToDelete);
    handleDeleteFromBasket(idPrductToDelete);
    idPrductToDelete === isProductSelected.idPrductToDelete &&
      setIsProductSelected(EMPTY_PRODUCT);
  };

  const handleAddButton = (e, id) => {
    e.stopPropagation();
    const productToAdd = menu.find((product) => product.id === id);
    handleAddToBasket(productToAdd);
  };

  let classNameCardContainer = isModeAdmin
    ? "card-container is-hoverable"
    : "card-container";

  return (
    <MenuStyled className="menu">
      {menu.map(
        ({ id, title, imageSource, price, isAvailable, isPublicised }) => {
          return (
            <div className={classNameCardContainer} key={id}>
              {convertStringToBoolean(isPublicised) && (
                <Ribbon label="Nouveau" />
              )}
              <Card
                key={id}
                title={title}
                imageSource={
                  imageSource === "" ? IMAGE_BY_DEFAULT : imageSource
                }
                leftDescription={formatPrice(price)}
                hasDelete={isModeAdmin}
                onDelete={(e) => handleCardDelete(e, id)}
                onClick={() => handleClick(id)}
                $isHoverable={isModeAdmin}
                $isSelected={checkIfProductIsClicked(id, isProductSelected.id)}
                onAdd={(e) => handleAddButton(e, id)}
                isOverlappingImageVisible={
                  convertStringToBoolean(isAvailable) === false
                }
                overlapImageSource={IMAGE_NO_STOCK}
              />
            </div>
          );
        },
      )}
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

  .card-container {
    position: relative;
    height: 330px;
    border-radius: ${theme.borderRadius.extraRound};

    &.is-hoverable {
      &:hover {
        transform: scale(1.05);
        transition: ease-out 0.4s;
      }
    }
  }
`;
