import styled from 'styled-components';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import './../../../../index.css';

const HeaderSection = styled(AppBar)`

    background-color: #05445e;
    /* height: 3rem; */
    align-items: center;

`

const HeaderLinks = styled(Toolbar)`

width: 100%;
display: flex;
align-items: center;
justify-content: space-between;

`;

// ({
//     width: '100%',
//     minHeight: '2rem',
//     height: '3rem',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
// });


const Logo = styled.a`

    font-family: 'Press Start 2P', cursive;
    font-size: 1.5rem;
    text-decoration: none;
    &:visited{
        color: #ffffff;
    }
    
`;


function Header(){
    return (
        <HeaderSection>
            <HeaderLinks>
                <Logo href="/">WiredHub</Logo>                       
                <div>
                    <a className="header-links" href="#00">Início</a>
                    <a className="header-links" href="#00">Perfil</a>
                    <a className="header-links" href="#00">Recados</a>
                    <a className="header-links" href="#00">Amigos</a>
                    <a className="header-links" href="#00">Comunidades</a>
                </div>
                <a className="header-links" href="#00">Sair</a>
            </HeaderLinks>
        </HeaderSection>
    );
};

export default Header;