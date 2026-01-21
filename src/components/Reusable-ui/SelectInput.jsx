import styled from "styled-components";

export default function SelectInput({
  value,
  options,
  name,
  className,
  id,
  onChange,
}) {
  return (
    <SelectInputStyled
      name={name}
      className={className}
      value={value}
      id={id}
      onChange={onChange}
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
