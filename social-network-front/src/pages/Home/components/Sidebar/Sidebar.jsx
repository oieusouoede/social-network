import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import { Container, Box, List, ListItem, ListItemText } from '@mui/material';

const SidebarMenu = styled(Paper)`
    && {
        width: 270px;
        padding: 10px;

    }
`;

const UserInfo = styled(Container)`

    &&{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: center;
    }

`;

const UserName = styled.a`

    text-decoration: none;
    font-size: 1.5rem;
    &:visited{
        color: #000000;
    }

`;

const UserDesc = styled.p`

    margin: 10px 0;

`;

const UserAvatar = styled(Avatar)`

    &&{
        width: 180px;
        height: 180px;
        margin: 20px 0;
        text-decoration: none;
    }

`;

function Sidebar () {
    return (
        <SidebarMenu elevation={1}>
            <UserInfo>
                <UserAvatar src="/"/>
                <UserName href='/'>Nome do Usuário</UserName>
                <UserDesc>Descrição do usuário com biografia e sei lá, só to enchendo a linguiça</UserDesc>
            </UserInfo>
            <Box>
                <List>
                    <ListItem component='a' href='/'>
                    <ListItemText primary="Perfil"/>
                    </ListItem>
                    <ListItem component='a' href='/'>
                    <ListItemText primary="Recados"/>
                    </ListItem>
                    <ListItem component='a' href='/'>
                    <ListItemText primary="Fotos"/>
                    </ListItem>
                    <ListItem component='a' href='/'>
                    <ListItemText primary="Amigos"/>
                    </ListItem>
                    <ListItem component='a' href='/'>
                    <ListItemText primary="Comunidades"/>
                    </ListItem>
                </List>
            </Box>
        </SidebarMenu>
    );
};

export default Sidebar;