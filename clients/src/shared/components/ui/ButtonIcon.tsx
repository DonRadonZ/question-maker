import styled from "styled-components";

type ButtonIconProps = {
    onClick?: any
}

const ButtonIcon = styled.button<ButtonIconProps>`
    background: none;
    border: none;
    padding: 0.6rem;
    border-radius: var(--border-radius-sm);
    transition: all 0.2s;

    &:hover {
        background-color: var(--color-gray-100);
    }

    & svg {
        width: 2.2rem;
        height: 2.2rem;
        /* color: var(--color-brand-700); */
    }
`;

export default ButtonIcon;
