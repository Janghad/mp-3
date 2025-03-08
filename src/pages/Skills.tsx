import styled from 'styled-components';
import { StyledBody, Wrapper, StyledMain, StyledTitle } from '../StyledComponent';
import Nav from "../components/Nav"
import Header from "../components/Header"
import Footer from "../components/Footer"

const StyledSkillsSection = styled.div`
    padding: 20px;
    color: rgb(30, 106, 222);
    h4 {margin: 20px 0; color: rgb(30, 106, 222);
    }
`;

const StyledSkillsTable = styled.table`
    width: 100%;
    margin: 20px 0;
`;

const StyledSkills = styled.td`
    padding: 15px;
    text-align: center;
    border: 2px solid black;
    background-color: white;
    color: rgb(30, 106, 222);
    font-weight: bold;
`;


export default function Skills(){
    return (
        <StyledBody>
        <Header/>
        <Wrapper>
            <Nav/>
            <StyledMain>
                <StyledTitle>Skills</StyledTitle>
                <StyledSkillsSection>
                    <h4>Programming Languages</h4>
                    <StyledSkillsTable>
                    <tbody>
                        <tr>
                            <StyledSkills>Python</StyledSkills>
                            <StyledSkills>Java</StyledSkills>
                            <StyledSkills>JavaScript</StyledSkills>
                        </tr>
                    
                        <tr>
                            <StyledSkills>HTML</StyledSkills>
                            <StyledSkills>CSS</StyledSkills>
                            <StyledSkills>SQL</StyledSkills>
                        </tr>
                    </tbody>
                    </StyledSkillsTable>

                    <h4>Frameworks & Tools</h4>
                    <StyledSkillsTable>
                    <tbody>
                        <tr>
                            <StyledSkills>React</StyledSkills>
                            <StyledSkills>Node.js</StyledSkills>
                            <StyledSkills>Git</StyledSkills>
                        </tr>
                        <tr>
                            <StyledSkills>VS Code</StyledSkills>
                            <StyledSkills>GitHub</StyledSkills>
                            <StyledSkills>MongoDB</StyledSkills>
                        </tr>
                    </tbody>
                    </StyledSkillsTable>
                </StyledSkillsSection>
            
            </StyledMain>
        </Wrapper>

            <Footer/>
        </StyledBody>
    );
};
