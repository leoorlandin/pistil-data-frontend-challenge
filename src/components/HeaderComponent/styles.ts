import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #000;
    padding: 0 12rem;

    h1 {
      color: #fff;
    }


    input {
		  padding: .5rem;
      border: none;
      margin-right: .5rem;
      border-radius: 6px;
      outline: none;
      
      &::placeholder {
        font-weight: 800;
      }
    }

    button {
      padding: .5rem 1rem;
      border: none;
      border-radius: 4px;
      font-weight: 800;
      background: #FFF;
      transition: filter 200ms ease-in-out;

      &:hover {
        filter: brightness(.8);
      }
    }
`