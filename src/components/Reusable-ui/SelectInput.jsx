import styled from "styled-components";
import { theme } from "../../theme";

export default function SelectInput({
  value,
  options,
  name,
  className,
  id,
  onChange,
  onFocus,
  onBlur,
  Icon,
}) {
  return (
    <SelectInputStyled className={className}>
      {Icon && <div className="icon">{Icon}</div>}
      <select
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </SelectInputStyled>
  );
}

const SelectInputStyled = styled.div`
  background-color: ${theme.colors.background_white};
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;
  padding: 8px 16px;

  .icon {
    font-size: ${theme.fonts.size.P1};
    margin-right: 13px;
    color: ${theme.colors.greyBlue};
    display: flex;
  }

  select {
    background: ${theme.colors.background_white};
    border: none;
    font-size: ${theme.fonts.size.SM};
    color: ${theme.colors.dark};
    width: 100%;
    outline: none;
  }
`;
