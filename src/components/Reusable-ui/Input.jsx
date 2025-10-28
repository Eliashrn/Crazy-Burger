import styled, { css } from "styled-components";
import { theme } from "../../theme";

export default function Input({
  value,
  onChange,
  Icon,
  className,
  version = "normal",
  ...extraProps
}) {
  return (
    <InputStyled className={className} version={version}>
      <div className="icon">{Icon && Icon}</div>
      <input type="text" value={value} onChange={onChange} {...extraProps} />
    </InputStyled>
  );
}

const InputStyled = styled.div`
  /* background: ${theme.colors.white}; */
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;
  padding: 18px 24px;

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fonts.SM};
    margin: 0 8px 0 10px;
    color: ${theme.colors.greySemiDark};
  }

  input {
    border: none;
    font-size: ${theme.fonts.SM};
    color: ${theme.colors.dark};
    width: 100%;
    &::placeholder {
      color: ${theme.colors.greyMedium};
    }
  }

  ${(props) => props.version === "normal" && extraNormalStyles};
  ${(props) => props.version === "minimalist" && minimalistStyles};
`;

const extraNormalStyles = css`
  background-color: ${theme.colors.white};
  padding: 18px 28px;
  color: ${theme.colors.greySemiDark};

  input {
    color: ${theme.colors.dark};

    &::placeholder {
      background: ${theme.colors.white};
    }
  }
`;

const minimalistStyles = css`
  background-color: ${theme.colors.background_white};
  padding: 8px 16px;
  color: ${theme.colors.greyBlue};

  input {
    background: ${theme.colors.red};
    color: ${theme.colors.dark};

    &::focus {
      outline: 0;
    }
  }
`;
