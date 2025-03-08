import styled from 'styled-components';
import { StyledBody, Wrapper, StyledMain, StyledTitle } from '../StyledComponent';
import Nav from "../components/Nav";
import Header from "../components/Header";
import Footer from "../components/Footer"

const StyledContactsSection = styled.div`
    padding: 20px;
    color: rgb(30, 106, 222);
`;

const StyledContactInfo = styled.div`
    margin-bottom: 30px;
    border-left: 4px solid rgb(30, 106, 222);
    padding-left: 20px;
    h4 {margin-bottom: 5px;}
`;

const StyledInfo = styled.p`
    font-style: italic;
    margin-bottom: 15px;
`;

export default function() {
    return (
        <StyledBody>
            <Header/>
            <Wrapper>
            <Nav/>
            <StyledMain>
                <StyledTitle>Contact</StyledTitle>

            <StyledContactsSection>
                <StyledContactInfo>
                    <h4>Email</h4>
                    <StyledInfo>janghad@bu.edu</StyledInfo>
                </StyledContactInfo>
            
                <StyledContactInfo>
                    <h4>Phone Number</h4>
                    <StyledInfo>(917) 123-4567</StyledInfo>
                </StyledContactInfo>
            
                <StyledContactInfo>
                    <h4>Address</h4>
                    <StyledInfo>1234 Beacon Street, Boston, 02215</StyledInfo>
                </StyledContactInfo>
            </StyledContactsSection>

            </StyledMain>
            </Wrapper>
            <Footer/>
        </StyledBody>
    );
};

