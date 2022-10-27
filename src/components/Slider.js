import styled from "styled-components";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
const Container = styled.div`
width:100%;
height: 100vh;
display:flex;
position:relative;
overflow: hidden;
`
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;
const Wrapper = styled.div`
height:100%;
`;
const Slide = styled.div`
width:100vw;
height: 100vh;
display:flex;
align-items:center;

`;
const ImgContainer = styled.div`
height:100%;
flex:1;
`;
const Img = styled.img`
height:80%;
`;


const InfoContainer = styled.div`
flex:1;
`
const Slider = () =>{
    return(
        <Container>
        <Arrow direction="left">
        <ArrowLeftIcon/>
        </Arrow>
        <Wrapper>
        <Slide>
        <ImgContainer>
        <Img src="https://www.getillustrations.com/packs/zima-blue-character-illustration-pack/scenes/_1x/shopping%20_%20woman,%20female,%20person,%20shop,%20ecommerce,%20cart_md.png"/>
        </ImgContainer>
        <InfoContainer></InfoContainer>
        </Slide>
        </Wrapper>
        <Arrow direction="right">
        <ArrowRightIcon/>
        </Arrow>
        </Container>
    )
}
export default Slider;