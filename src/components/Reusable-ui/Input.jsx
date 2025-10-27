import styled from "styled-components";
import { theme } from "../../theme";

export default function Input({ value, onChange, Icon, ...extraProps }) {
  return (
    <InputStyled>
      <div className="icon">{Icon && Icon}</div>
      <input type="text" value={value} onChange={onChange} {...extraProps} />
    </InputStyled>
  );
}

const InputStyled = styled.div`
  background: #fff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 18px 24px;
  margin: 18px 0;

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fonts.SM};
    margin-right: 8px;
    margin-left: 10px;
    color: ${theme.colors.greySemiDark};
  }

  input {
    border: none;
    font-size: 15px;
    color: #17161a;
    width: 100%;
  }
  &::placeholder {
    background: white;
    color: lightgrey;
  }
`;
