import React, {useState} from 'react';
import {Navigate, useLocation, useNavigate} from 'react-router-dom';
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import PrivatePage from "./PrivatePage";
import * as PropTypes from "prop-types";


const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [inputOne, setInputOne] = useState('');
    const [inputTwo, setInputTwo] = useState('');

    const fromPage = location.state?.from?.pathname || '/';

    async function checkPassword(e) {
        e.preventDefault();
        if (inputOne == "admin" && inputTwo == "123456") {
            navigate("/private", {children: true});
        } else {
            alert ("Вы ввели неправильный логин или пароль");
        }
    }

    return (
        <div>
            {fromPage}
            <h1>Страница для логина</h1>
            <form>
                <MyInput
                    type="text"
                    placeholder="Введите логин"
                    id="login"
                    onChange={(event) => setInputOne(event.target.value)}
                />
                <MyInput
                    type="password"
                    placeholder="Введите пароль"
                    id="password"
                    onChange={(event) => setInputTwo(event.target.value)}
                />
                <MyButton onClick={checkPassword}>Войти</MyButton>
            </form>
        </div>
    );
};

export default Login;