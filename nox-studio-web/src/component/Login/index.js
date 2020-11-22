import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import firebase from '../../firebase';
import './login.css';

class Login extends Component {

    // Constructor
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        // Binds
        this.entrar = this.entrar.bind(this);
        this.login = this.login.bind(this);
    }

    // Verifica assim se o usuário já está logado assim que apágina de login carregar
    componentDidMount() {
        if (firebase.getCurrent()) {
            return this.props.history.replace('dashboard');
        }
    }

    entrar(e) {
        e.preventDefault(); // Não deixar atualizar a página  quando clicar nesse botão.  
        this.login();
    }

    login = async () => {

        const { email, password } = this.state;

        try {

            let errorOnLogin = false;

            await firebase.login(email, password)
                .catch((error) => {
                    if (error.code === 'auth/user-not-found') {
                        alert('Este usuário não existe!');
                        return errorOnLogin === true;
                    } else {
                        alert('Código de erro: ' + error.code);
                        return errorOnLogin === true;
                    }
                });

            if (errorOnLogin === false) {
                this.props.history.replace('/dashboard');
            }

        } catch (error) {
            alert(error.message);
            return null;
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.entrar} id="login">
                    <label>Email:</label><br />
                    <input type="email"
                        autoComplete="off"
                        autoFocus
                        value={this.state.email}
                        onChange={(e) => this.setState({ email: e.target.value })}
                        placeholder="teste@noxstudio.com.br">
                    </input>
                    <br />
                    <label>Password:</label><br />
                    <input type="password"
                        autoComplete="off"
                        autoFocus
                        value={this.state.password}
                        onChange={(e) => this.setState({ password: e.target.value })}
                        placeholder="Sua Senha">
                    </input>
                    <br />
                    <button type="submit">
                        Entrar
                    </button>
                    <Link to="/register">Ainda não possui uma conta?</Link>
                </form>
            </div>
        );
    }
}

export default withRouter(Login);