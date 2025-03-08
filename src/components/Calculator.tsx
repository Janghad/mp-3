import { useState } from 'react'
import styled from 'styled-components'

const CalculatorWrapper = styled.div`
    margin-top: 20px;
    padding: 15px;
    border-left: 4px solid rgb(30, 106, 222);
    text-align: center;
`

const StyledInputField = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledInput = styled.input`
    width: 80%;
    padding: 12px;
    margin: 10px 0;
    border: 2px solid rgb(30, 106, 222);
    border-radius: 4px;
    font-size: calc(14px + 0.2vw);
`

const StyledButtonWrapper = styled.div`
    margin: 5px;
`

const CalcButton = styled.button`
    padding: 15px 25px;
    margin: 5px;
    font-size: calc(16px + 0.3vw);
    border: none;
    border-radius: 4px;
    background-color: rgb(30, 106, 222);
    color: white;
    cursor: pointer;
    &:hover {
    background-color: rgb(25, 82, 173);
    }
`

const StyledResults = styled.div`
    min-height: 50px;
    padding: 15px;
    margin-top: 20px;
    font-size: calc(18px + 0.4vw);
    text-align: center;
`

export default function Calculator() {
    const [first, setFirst] = useState('')
    const [second, setSecond] = useState('')
    const [result, setResult] = useState('')

    function add() {
        setResult(String(Number(first) + Number(second)))
    }

    function subtract() {
        setResult(String(Number(first) - Number(second)))
    }

    function multiply() {
        setResult(String(Number(first) * Number(second)))
    }

    function divide() {
    if (Number(second) === 0) {
        setResult('Error')
    } else {
        setResult(String(Number(first) / Number(second)))
    }
    }

    function power() {
    let base = Number(first)
    let exponent = Number(second)

    if (exponent === 0) {
        setResult('1')
        return
    }

    let output = 1

    if (exponent > 0) {
      for (let i = 0; i < exponent; i++) output *= base
    } else {
        exponent = -exponent
        for (let i = 0; i < exponent; i++) output *= base
        output = 1 / output
    }

    setResult(String(output))
    }

    function clearAll() {
        setFirst('')
        setSecond('')
        setResult('')
    }

    let finalColor;

    if (Number(result) < 0) {
        finalColor = 'red';
    } else {
        finalColor = 'rgb(30, 106, 222)';
    }

    return (
        <CalculatorWrapper>
            <h4>JavaScript Calculator</h4>
            <StyledInputField>
                <StyledInput
                    placeholder="First number"
                    value={first}
                    onChange={(e: any) => setFirst(e.target.value)}
                />

                <StyledInput
                    placeholder="Second number"
                    value={second}
                    onChange={(e: any) => setSecond(e.target.value)}
                />

                <StyledButtonWrapper>
                    <CalcButton onClick={add}>+</CalcButton>
                    <CalcButton onClick={subtract}>-</CalcButton>
                    <CalcButton onClick={multiply}>*</CalcButton>
                    <CalcButton onClick={divide}>/</CalcButton>
                    <CalcButton onClick={power}>**</CalcButton>
                    <CalcButton onClick={clearAll}>Clear</CalcButton>
                </StyledButtonWrapper>
            
                <StyledResults style={{ color: finalColor }}>{result}</StyledResults>

            </StyledInputField>
        </CalculatorWrapper>
    );
}