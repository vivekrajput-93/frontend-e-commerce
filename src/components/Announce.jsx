import { styled } from "styled-components";



const Container = styled.div`
 height: 30px;
 background-color : var(--bg-color);
 color: white;
 display : flex;
 align-items : center;
 justify-content : center;
 font-weight : 500;
`

const Announce = () => {
  return (
    <Container>
        Super Deal! Free Shipping on Orders over  ₹500
    </Container>
  )
}

export default Announce ;