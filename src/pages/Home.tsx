import { Link } from 'react-router';
import styled from 'styled-components';
import { StyledBody, Wrapper, StyledMain, StyledTitle } from '../StyledComponent';
import Nav from '../components/Nav';
import ja from "../assets/ja.jpg";
import Header from "../components/Header"
import Footer from "../components/Footer"

const StyledProfilePic = styled.div`
    margin: 20px;
    text-align: center;
    img {max-width: 300px; height: auto;}
`;

const StyledDetails = styled.div`
    color: rgb(30, 106, 222);
    font-size: large;
    margin: 20px 0;
`;

const StyledDescription = styled.div`
    color: rgb(30, 106, 222);
    font-size: large;
    margin: 20px 0;
`;



export default function Home() {
    return (
        <StyledBody>
            <Header/>
            <Wrapper>
                <Nav/>
                <StyledMain>
                    <StyledTitle>Home</StyledTitle>

                    <StyledProfilePic>
                        <img src={ja} alt="Jason Anghad"/>
                    </StyledProfilePic>

                    <StyledDetails>
                        <p>
                        My name is Jason Anghad and I am a senior at Boston University studying Computer Science.
                        I am pursuing a career in Web Development. I love coding and the process of being able to 
                        create software from scratch. I hope to eventually work to develop products that are meaningful 
                        and accessible to everyone.
                        </p>
                    </StyledDetails>

                    <StyledDescription>
                        <p>
                        On this website, you will learn more about my 
                        <Link to="/experience"> work experiences,</Link> 
                        <Link to="/education"> education</Link> and growing 
                        <Link to="/skills"> skills</Link> as well as practical applications of developing through my 
                        <Link to="/projects"> projects</Link>.
                        </p>
                    </StyledDescription>
                </StyledMain>
                </Wrapper>

                <Footer/>
            </StyledBody>
    );
};
