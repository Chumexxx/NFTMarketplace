import logo from '../../assets/Sygnet.svg'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Wrapper>
        <Nav>
            <img src={logo} alt="logo" />

            <QuickLinks>
                <NavLink to="/aunctions">Aunctions</NavLink>
                <NavLink to="/roadmap">Roadmap</NavLink>
                <NavLink to="/discover">Discover</NavLink>
                <NavLink to="/community">Community</NavLink>
            </QuickLinks>

            <Buttons>
                <ContactButton>  <p>Contact</p> </ContactButton>

                <MyAccountButton> <p>My account</p> </MyAccountButton>
            </Buttons>


        </Nav>
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.div`
    width: 100%;
`

const Nav = styled.div`
    img{
        width: 20px;
    }
    width: 100%;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const QuickLinks = styled.div`
    display: flex;
    gap: 30px;
`

const NavLink = styled(Link)`
    color: #636ab3;
    text-decoration: none;
    cursor: pointer;
`

const Buttons = styled.div`
    display: flex;
    gap: 20px;
`

const ContactButton = styled.div`
    color: #636ab3;
    background-color: transparent;
    border-radius: 5px;
    border: 1px solid #262840;
    width: 100px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    p{
        font-size: 12px;
        color: #636ab3;
    }
`

const MyAccountButton = styled.div`
    color: white;
    background-color: #1e28aa;
    border-radius: 5px;
    border: 1px solid #262840;
    width: 100px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    p{
        background-color: transparent;
        font-size: 12px;
    }
`