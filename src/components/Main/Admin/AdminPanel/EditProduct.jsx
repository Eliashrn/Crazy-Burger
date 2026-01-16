import { useContext, useState } from "react";
import OrderContext from "../../../../context/OrderContext";
import EditInfoMessage from "./EditInfoMessage";
import Form from "./Form";
import SaveMessage from "./SaveMessage";
import { useSuccesSubmit } from "../../../../hooks/useSuccesSubmit";

export default function EditProduct() {
  const [valueOnFocus, setValueOnFocus] = useState("");
  const { successSubmit: isSaved, succesSubmit } = useSuccesSubmit();

  const {
    isProductSelected,
    setIsProductSelected,
    handleEdith,
    titleEdithBox,
    handleEdithBasket,
    username,
  } = useContext(OrderContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const productBeingUpdate = { ...isProductSelected, [name]: value };

    setIsProductSelected(productBeingUpdate);
    handleEdith(productBeingUpdate, username);
    handleEdithBasket(productBeingUpdate, username);
  };

  const handleOnFocus = (e) => {
    const inputValueOnFocus = e.target.value;
    setValueOnFocus(inputValueOnFocus);
  };

  const handleOnBlur = (e) => {
    const valueOnBlur = e.target.value;
    if (valueOnBlur !== valueOnFocus) {
      succesSubmit();
    }
  };

  return (
    <Form
      product={isProductSelected}
      onChange={handleChange}
      ref={titleEdithBox}
      button={isSaved ? <SaveMessage /> : <EditInfoMessage />}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
    />
  );
}
