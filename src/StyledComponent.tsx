import styled from 'styled-components';

export const StyledBody = styled.div`
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
`;

export const StyledHeader = styled.header`
    font-family: Arial, Helvetica, sans-serif;
    background-color: rgb(139, 46, 46);  
    padding: 10px 20px;
    box-sizing: border-box;
    color: white;
    display: flex;
    flex-direction: column;
    text-align: left;
    border: 2px solid black;
`;

export const StyledFooter = styled.footer`
    font-family: Arial, Helvetica, sans-serif;
    background-color: rgb(139, 46, 46);  
    padding: 10px 20px;
    box-sizing: border-box;
    color: white;
    display: flex;
    flex-direction: column;
    text-align: left;
    border: 2px solid black;

`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    text-align: center;

    @media screen and (max-width: 750px) {
    flex-direction: column;
    }
`;

export const StyledSidebar = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    max-width: 30%;
    padding: 20px 0; 
    box-sizing: border-box;
    background-color: rgb(61, 84, 164);
    text-align: center;
    list-style: none;
    height: 100vh;

    @media screen and (max-width: 750px) {
    width: 100%;
    height: auto;
    }
`;

export const StyledUL = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    width: 100%;
    text-align: center;
    background-color: rgb(61, 84, 164);

    @media screen and (max-width: 750px) {
    display: flex;
    justify-content: center;
    }
`;

export const StyledLI = styled.li`
    display: block;
    width: 100%;
    padding: 15px;
    margin-bottom: 10px;
    text-align: center;
    background-color: rgb(61, 84, 164);
    border: 2px solid black;

    @media screen and (max-width: 750px) {
    display: flex;
    justify-content: center;
    padding: 10px;
    margin: 0;
    width: auto;
    }
`;

export const StyledMain = styled.main`
    min-height: 100vh; 
    padding: 20px;
    box-sizing: border-box;
    background-color: rgb(184, 186, 195); 
    display: flex;
    flex-direction: column;
    text-align: center; 
    justify-content: flex-start;
    width:100%;

    @media screen and (max-width: 750px) {
    width: 100%;
    }
`;

export const StyledTitle = styled.h3`
    margin-top: 0;
`;