import styled from "styled-components";

export const Container = styled.div`

  max-height: 20rem;
  max-width: 14rem;
  background: #FFF;
  border-radius: 6px;
  box-shadow: 2px 2px 2px 1px rgba(60, 60, 60, 0.5);
  border: 1px solid #efefef;
  background: #000;
  color: #fff;
  transition: transform 200ms ease-in-out;

  &:hover{
    cursor: pointer;
    transform: scale(1.1)
  }
  
  img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 6px 6px 0 0;
    object-fit: fill;
  }

  h2, h3 {
    padding: .2rem;
  }
`