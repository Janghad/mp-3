import styled from 'styled-components';
import { StyledBody, Wrapper, StyledMain, StyledTitle } from '../StyledComponent';
import Nav from "../components/Nav"
import Header from "../components/Header";
import Footer from "../components/Footer"

const StyledEducationSection = styled.div`
    padding: 20px;
    color: rgb(30, 106, 222);
`;

const StyledSchools = styled.div`
    margin-bottom: 30px;
    border-left: 4px solid rgb(30, 106, 222);
    padding-left: 20px;
    h4 {margin-bottom: 5px;}
`;

const StyledYear = styled.p`
    font-style: italic;
    margin-bottom: 15px;
`;


export default function Education() {
    return (
        <StyledBody>
        <Header/>
        <Wrapper>
            <Nav/>
            <StyledMain>
                <StyledTitle>Education</StyledTitle>
                <StyledEducationSection>
                    <StyledSchools>
                        <h4>Boston University | Boston, MA</h4>
                        <StyledYear>Class of 2025</StyledYear>
                    </StyledSchools>
            
                    <StyledSchools>
                        <h4>Archbishop Molloy High School | Queens, NY</h4>
                        <StyledYear>Class of 2021</StyledYear>
                    </StyledSchools>
                </StyledEducationSection>

            </StyledMain>
        </Wrapper>

        <Footer/>
        </StyledBody>
    );
};
