import styled,{ css } from "styled-components";

type TButtonProps = {
  icon?: any;
  variation?: "primary" | "secondary" | "danger"; 
  size?: "small" | "medium" | "large";
  onClick?: any;
}

const sizes = {
  small: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    text-align: center;
    text-transform: uppercase;
    font-weight: 600;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
    text-align: center;
  `,
};

const variations = {
  primary: css`
    color: var(--color-brand-50);
    background-color: var(--color-brand-400);

    &:hover {
      background-color: var(--color-brand-700);
    }
  `,
  secondary: css`
    color: var(--color-gray-700);
    background: var(--color-gray-100);
    border: 1px solid var(--color-gray-200);

    &:hover {
      background-color: var(--color-gray-50);
    }
  `,
  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-800);
    }
  `,
};



const CatalogButton = styled.button<TButtonProps>`
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  
  ${({size}) => size && sizes[size]};
  ${({ variation }) => variation && variations[variation]};
  
  &:disabled{
    background-color: var(--color-gray-600);
    color: var(--color-gray-0);
    cursor: not-allowed;
  }
`;

CatalogButton.defaultProps = {
  variation: 'primary',
  size: 'medium'
}

export default CatalogButton;