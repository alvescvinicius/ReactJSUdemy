import app from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

// Your web app's Firebase configuration
let firebaseConfig = {
    apiKey: "AIzaSyB3euWSuDydslabAJeEPhPW3qpvgn8AV8E",
    authDomain: "nox-studio.firebaseapp.com",
    databaseURL: "https://nox-studio.firebaseio.com",
    projectId: "nox-studio",
    storageBucket: "nox-studio.appspot.com",
    messagingSenderId: "1010873134018",
    appId: "1:1010873134018:web:fc4ec36c819f270a78c45b"
};
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

class Firebase {

    // Construtor iniciando o firebase
    constructor(){
        app.initializeApp(firebaseConfig);
    }

    // Metodos 
    login(email, password){
        return app.auth().signInWithEmailAndPassword(email, password);
    }

    async register(nome, email, password){
        await app.auth().createUserWithEmailAndPassword();
        const uid = app.auth().currentUser.uid;
        return app.database.ref('usuarios').child(uid).set({
            nome: {nome}
        });
    }

    isInitialized(){
        return new Promise(resolve => {
            app.auth().onAuthStateChanged(resolve);
        })
    }

}

export default new Firebase();