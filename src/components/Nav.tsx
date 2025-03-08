import { Link } from 'react-router';
import { StyledSidebar, StyledUL, StyledLI } from '../StyledComponent';
import styled from 'styled-components';


const StyledLink = styled(Link)`
    display: inline-block;
    padding: 15px 40px;
    text-decoration: none;
    color: #06202f;
    background-color: white;
    font-weight: bold;
    border: 2px solid green;
    font-size: 18px;

    @media screen and (max-width: 750px) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 10px 15px;
        border: 2px solid black;
    }
`;

export default function Nav() {
    return (
        <StyledSidebar>
        <nav>
            <StyledUL>
                <StyledLI>
                    <StyledLink to="/">Home</StyledLink>
                </StyledLI>
                
                <StyledLI>
                    <StyledLink to="/education">Education</StyledLink>
                </StyledLI>

                <StyledLI>
                    <StyledLink to="/experience">Work Experience</StyledLink>
                </StyledLI>

                <StyledLI>
                    <StyledLink to="/projects">Projects</StyledLink>
                </StyledLI>

                <StyledLI>
                    <StyledLink to="/skills">Skills</StyledLink>
                </StyledLI>

                <StyledLI>
                    <StyledLink to="/contact">Contact</StyledLink>
                </StyledLI>

            </StyledUL>
        </nav>
        </StyledSidebar>
    );
};
