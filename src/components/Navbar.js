import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
const Container = styled.div`
height : 60px;
`
const Wrapper = styled.div`
padding : 10px 20px;
display: flex;
justify-content : space-between;
align-item :center;
`
const Left = styled.div`
flex:1;
display: flex;
align-item: center;
`
const Language = styled.span`
font-size : 14px;
cursor:pointer;
`
const SearchContainer = styled.div`
display: flex;
align-items:center;
margin-left:25px;
padding: 0px;
border: 1px solid gray;
`
const Input = styled.input`
border:none;
`

const Right = styled.div`
flex:1;
display:flex;
align-item:center;
justify-content: flex-end;

`
const MenuItem = styled.div`
font-size: 14px;
cursor:pointer;
margin-left:25px;
`
const Center = styled.div`
flex:1;
text-align: center;
`
const Logo = styled.h1`
font-weight :  bold;

`

const Navbar = () => {
  return (
    <Container>
    <Wrapper>
        <Left>
        <Language>
            EN
        </Language>
        <SearchContainer>
            <Input/>
            <SearchIcon style={{color:"gray",fontSize:16}}/>
        </SearchContainer>
        </Left>
        <Center><Logo>VARNSA.</Logo></Center>
        <Right><MenuItem>REGISTER</MenuItem>
        <MenuItem>SIGN IN</MenuItem>
        <MenuItem>
        <Badge badgeContent={4} color="secondary">
        <ShoppingCartOutlinedIcon/>
        </Badge>
        </MenuItem>
        </Right>
    </Wrapper>
    </Container>
  )
}

export default Navbar
