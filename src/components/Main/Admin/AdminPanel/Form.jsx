import styled from "styled-components";
import Input from "../../../Reusable-ui/Input";
import { getInputTextConfig } from "./getInputTextConfig";
import React from "react";
import ImagePreview from "./ImagePreview";

const Form = React.forwardRef(
  ({ product, onSubmit, onChange, button, onFocus, onBlur }, ref) => {
    const inputTexts = getInputTextConfig(product);

    //Render

    return (
      <FormStyled onSubmit={onSubmit}>
        <ImagePreview imageSource={product.imageSource} title={product.title} />
        <div className="input-fields">
          {inputTexts.map((input) => (
            <Input
              key={input.id}
              {...input}
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
              version="minimalist"
              ref={ref && input.name === "title" ? ref : null}
            />
          ))}
        </div>
        <div className="submit"> {button} </div>
      </FormStyled>
    );
  }
);

export default Form;

const FormStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  height: 100%;
  width: 70%;
  grid-column-gap: 20px;
  grid-row-gap: 8px;

  .input-fields {
    grid-area: 1 / 2 / -2 / 3;
    display: grid;
    grid-row-gap: 8px;
  }

  .submit {
    grid-area: 4 / -2 / -1 / -1;
    display: flex;
    position: relative;
    align-items: center;
  }
`;
