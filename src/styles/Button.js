import styled from "styled-components";

export const Button = styled.button`
  text-decoration: none;
  max-width: auto;
  color: white;
  font-weight: bold;
  padding: 1.4rem 2.4rem;
  border: none;
  text-align: center;
  cursor: pointer;
  border-radius: 0.5rem;
  background:linear-gradient(93.69deg, #2D56EC -14.13%, #1AACEA 120.91%);
  font-family: Arial, sans-serif;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  font-size: 1.3rem;

  &:hover,
  &:active {
    box-shadow: 0 2rem 2rem 0 rgb(132 144 255 / 30%);
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: scale(0.96);
  }

  a {
    text-decoration: none;
    color: white;
    font-size: 1.8rem;
    
  }
`;
