import React, {useState} from 'react';
import "./register.css";
import Input from "../../utils/input/input";
import {registerAction} from "../../actions/user";


const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div className="registration">
            <div className="registration__header">Регистрация</div>
            <Input value={email} setValue={setEmail} type="text" placeholder="Введите email..."/>
            <Input value={password} setValue={setPassword} type="password" placeholder="Введите пароль..."/>
            <button className="registration__btn" onClick={() => registerAction(email, password)}>Создать</button>
        </div>
    );
};

export default Register;