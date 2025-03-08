import styled from 'styled-components';
import { StyledBody, Wrapper, StyledMain, StyledTitle } from '../StyledComponent';
import Nav from "../components/Nav"
import Header from "../components/Header"
import Footer from "../components/Footer"

const StyledWorkExperienceSection = styled.div`
    padding: 20px;
    color: rgb(30, 106, 222);
`;

const StyledCompany = styled.div`
    margin-bottom: 30px;
    border-left: 4px solid rgb(30, 106, 222);
    padding-left: 20px;
    h4 {margin-bottom: 5px;
    }
`;

const StyledJobTitle = styled.p`
    font-style: italic;
    margin-bottom: 15px;
`;

const StyledJobDetails = styled.ul`
    text-align: left;
    padding-left: 20px;
    li {margin-bottom: 8px;}
`;


export default function WorkExperience() {
    return (
        <StyledBody>
        <Header/>
        <Wrapper>
            <Nav/>
            <StyledMain>
                <StyledTitle>Work Experience</StyledTitle>

                <StyledWorkExperienceSection>
                    <StyledCompany>
                    <h4>USTA US Open | Queens, NY</h4>
                    <StyledJobTitle>IT Technician | August 2021 - September 2021</StyledJobTitle>
                    <StyledJobDetails>
                        <li>Assist the IT Project Manager in set-up, testing, training and client support for US Open Systems (i.e. Credentials, Ticket Scanners, Access control)</li>
                        <li>Responsible for deploying and troubleshooting hardware and software</li>
                    </StyledJobDetails>
                    </StyledCompany>
            
                    <StyledCompany>
                    <h4>NYC Department of Health and Mental Hygiene | New York, NY</h4>
                    <StyledJobTitle>IT Intern | June 2021 - August 2021</StyledJobTitle>
                    <StyledJobDetails>
                        <li>Perform diagnostics and troubleshooting of system issues using Python, documented help desk tickets/resolutions, and maintained computer inventory list</li>
                        <li>Installed and configured IT network components and assisted in the implementation of designed IT network configuration</li>
                    </StyledJobDetails>
                    </StyledCompany>
                </StyledWorkExperienceSection>

            </StyledMain>
        </Wrapper>
            <Footer/>
        </StyledBody>
    );
};
