import React from "react";

export default function Button({ disabled, children }) {
    return (
        <StyledButton disabled={disabled}>{children}</StyledButton>
    );


    const StyledButton = styled.button`
  margin: 0;
  border: none;
  cursor: pointer;
  font-family: "Noto Sans KR", sans-serif;
  font-size: var(--button-font-size, 1rem);
  padding: 12px 16px
  border-radius: 40px
  background-color: lightgray;
  color: #ffffff;

  &:active,
  &:hover,
  &:focus {
    background: var(--button-hover-bg-color, #025ce2);
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
    background: var(--button-bg-color, #025ce2);
  }
`;
}
