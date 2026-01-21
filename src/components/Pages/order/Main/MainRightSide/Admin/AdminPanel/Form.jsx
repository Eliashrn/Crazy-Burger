import styled from "styled-components";
import TextInput from "../../../../../../Reusable-ui/TextInput";
import { getInputTextConfig } from "./getInputTextConfig";
import React from "react";
import ImagePreview from "./ImagePreview";
import SelectInput from "../../../../../../Reusable-ui/SelectInput";

const Form = React.forwardRef(
  ({ product, onSubmit, onChange, button, onFocus, onBlur }, ref) => {
    const inputTexts = getInputTextConfig(product);

    const isValableOption = [
      { value: true, label: "En stock" },
      { value: false, label: "Hors stock" },
    ];

    const isPublicisedOption = [
      { value: true, label: "Sans pub" },
      { value: false, label: "Avec pub" },
    ];

    //Render

    return (
      <FormStyled onSubmit={onSubmit}>
        <ImagePreview imageSource={product.imageSource} title={product.title} />
        <div className="input-fields">
          {inputTexts.map((input) => (
            <TextInput
              className={input.classeName}
              key={input.id}
              {...input}
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
              version="minimalist"
              ref={ref && input.name === "title" ? ref : null}
            />
          ))}
          <SelectInput
            options={isValableOption}
            className="is-available"
            id={"03"}
          />
          <SelectInput
            options={isPublicisedOption}
            className="is-publicised"
            id={"04"}
          />
        </div>
        <div className="submit"> {button} </div>
      </FormStyled>
    );
  },
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
    display: grid;
    grid-area: 1 / 2 / -2 / 3;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 8px;
    grid-column-gap: 8px;

    .title {
      grid-area: 1 / 1 / 2 / 4;
    }

    .image-source {
      grid-area: 2 / 1 / 3 / 4;
    }
    .price {
      grid-area: 3 / 1 / 4 / 2;
      background: #000;
    }
    .is-available {
    }

    .is-publicised {
    }
  }

  .submit {
    grid-area: 4 / -2 / -1 / -1;
    display: flex;
    position: relative;
    align-items: center;
  }
`;
