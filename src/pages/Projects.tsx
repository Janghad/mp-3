import styled from 'styled-components';
import Calculator from '../components/Calculator';
import { StyledBody, Wrapper, StyledMain, StyledTitle } from '../StyledComponent';
import Nav from "../components/Nav"
import Header from "../components/Header"
import Footer from "../components/Footer"

const StyledProjectSection = styled.div`
    padding: 20px;
    color: rgb(30, 106, 222);
`;

const StyledProjects = styled.div`
    margin-bottom: 30px;
    border-left: 4px solid rgb(30, 106, 222);
    padding-left: 20px;
    h4 {
    font-size: calc(16px + 0.5vw);
    margin-bottom: 15px;
    }
`;

const StyledProjectDescription = styled.ul`
    text-align: left;
    padding-left: 20px;
    li {margin-bottom: 8px;}
`;



export default function Projects() {
    return (
        <StyledBody>
            <Header/>
            <Wrapper>
                <Nav/>
                <StyledMain>
                    <StyledTitle>Projects</StyledTitle>
                    <StyledProjectSection>
                        <StyledProjects>
                        <h4>Temperature Sensor</h4>
                        <StyledProjectDescription>
                        <li>Designed and 3D printed an enclosure that measured and displayed the temperature in a given room</li>
                        <li>Developed code which would cause the buzzer in the enclosure to play a tune when above a certain temperature threshold</li>
                        </StyledProjectDescription>
                        </StyledProjects>
                
                        <StyledProjects>
                        <h4>Overhead Touchless Directable Light</h4>
                        <StyledProjectDescription>
                        <li>Assigned tasks to teammates in coding and designing different aspects of the overhead light source</li>
                        <li>Developed code that would regulate the brightness of the light source given the brightness in the room and rotate the light source when given voice commands</li>
                        <li>Collaborated on code that would create a spotlight and blue light feature</li>
                        </StyledProjectDescription>
                        </StyledProjects>
                
                        <StyledProjects>
                        <h4>Opening Weekend Box Office Predictor</h4>
                        <StyledProjectDescription>
                        <li>Developed a model to estimate the box office performance of upcoming movies using sentiment analysis on social media and review data</li>
                        <li>Collected and pre-processed data from platforms like Twitter and YouTube, applying NLP techniques to classify sentiments as positive, negative, or neutral</li>
                        <li>Utilized regression models to predict box office revenue based on sentiment scores and online engagement metrics</li>
                        </StyledProjectDescription>
                        </StyledProjects>
                
                        <Calculator/>
                    </StyledProjectSection>

                </StyledMain>
            </Wrapper>
                <Footer/>
            </StyledBody>
    );
};