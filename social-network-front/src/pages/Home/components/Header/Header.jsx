import styled from 'styled-components';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import './../../../../index.css';

const HeaderSection = styled(AppBar)`

    &.MuiAppBar-root{
        background-color: #05445e;
        height: 3rem;
        align-items: center;
    } 
`;


const HeaderLinks = styled(Toolbar)`

    &.MuiToolbar-root{
        width: 100%;
        min-height: 2rem;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        
    }
`;

const Logo = styled.a`

    font-family: 'Press Start 2P', cursive;
    font-size: 1.5rem;
    text-decoration: none;
    &:visited{
        color: #ffffff;
    }   
`;

const NavLink = styled.a`

    color: #ffffff;
    margin: 0 0.5rem;
    &:visited {
        color: #ffffff;
    }
`;

function Header(){
    return (
        <HeaderSection>
            <HeaderLinks>
                <Logo href="/">WiredHub</Logo>                        
                <div>
                    <NavLink href="/">Início</NavLink>
                    <NavLink href="/">Perfil</NavLink>
                    <NavLink href="/">Recados</NavLink>
                    <NavLink href="/">Amigos</NavLink>
                    <NavLink href="/">Comunidades</NavLink>
                    <NavLink href="/">Sair</NavLink>
                </div>
            </HeaderLinks>
        </HeaderSection>
    );
};

export default Header;