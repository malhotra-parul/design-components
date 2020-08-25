import React from "react";
import styled from "styled-components";
import { animated, useSpring, config } from "react-spring";
import { typeScale } from "../utils";
import { PrimaryButton } from "./Buttons";
import { CloseIcon } from "../assets/icons/CloseIcon";
import SignUp from "../assets/illustrations/SignUp.svg";


const ModalWrapper = styled.div`
    width: 500px;
    height: 400px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background-color: ${ props => props.theme.formElementBgColor };
    color: ${ props => props.theme.textOnFormElement };
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    border-radius: 2px;
`;

const SignUpHeader = styled.h3`
    font-size: ${ typeScale.header3 };
`;

const SignUpText = styled.p`
    font-size: ${ typeScale.paragraph };
    max-width: 70%;
    text-align: center;
`;

const CloseIconButton = styled.button`
    position: absolute;
    right: 20px;
    top: 20px;
    padding: 0;
    background: none;
    border: none;
    height: 24px;
    width: 24px;
    cursor: pointer;
`;

export const SignUpModal = ({ showModal, setShowModal }) => {

    const animation = useSpring({
        opacity: showModal ? 1: 0,
        transform: showModal ? `translateY(0)` : `translateY(-200%)`,
        config: config.slow
    });
    return (
        <animated.div style={animation}>
        <ModalWrapper>
            <img src={SignUp} alt="sign-up"/>
            <SignUpHeader>Sign Up</SignUpHeader>
            <SignUpText>Sign In to gain access now!</SignUpText>
            <PrimaryButton>Sign Up</PrimaryButton>
            <CloseIconButton aria-label="close"><CloseIcon/></CloseIconButton>
        </ModalWrapper>
        </animated.div>
    );
}
