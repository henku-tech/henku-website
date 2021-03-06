import styled from 'styled-components'
import { Link } from 'gatsby'

export const ButtonWrapper = styled(Link)`
  position: relative;
  display: inline-block;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  font-family: Montserrat, sans-serif;
  font-weight: 500;
  background-color: transparent;
  z-index: 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: color 0.3s, border 0.3s, background 1s;
    z-index: -1;
  }

  &.buttonLight {
    color: var(--themeDark);
    border: 4px solid var(--highlight);
  }

  &.buttonLight:hover {
    color: #fff;

    &::before {
      background-color: var(--highlight);
    }
  }

  &.buttonDark {
    color: #fff;
    border: 4px solid var(--lightGreen);
  }

  &.buttonDark:hover {
    color: var(--deepDark);

    &::before {
      background-color: var(--lightGreen);
    }
  }

  @media (min-width: 576px) {
    padding: 1.25rem 2.125rem;
  }
`
