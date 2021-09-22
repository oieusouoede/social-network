import styled from 'styled-components';
import Header from './components/Header/Header';
//import Main from "./components/Main/Main";
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';
import { Container } from '@mui/material';

function Home() {
    return (
        <div>
            <Header/>
            <Container maxWidth="lg">
                    <Sidebar />
            </Container>
            {/* <Main/> */}
            <Footer/>
        </div>
    );
}

export default Home;