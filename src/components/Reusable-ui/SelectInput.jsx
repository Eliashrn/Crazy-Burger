import styled from "styled-components";

export default function SelectInput({
  value,
  options,
  name,
  className,
  id,
  onChange,
  onFocus,
  onBlur,
}) {
  return (
    <SelectInputStyled
      name={name}
      className={className}
      value={value}
      id={id}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </SelectInputStyled>
  );
}

const SelectInputStyled = styled.select`
  border: 1px solid #ccc;
`;
