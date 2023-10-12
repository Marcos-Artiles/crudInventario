import promptSync from 'prompt-sync';
import { ConsoleUI } from './interfaz';

export class Login {
    private _username: string;
    private _password: string;

    constructor(username: string, password: string) {
        this._username = username;
        this._password = password;
    }

    public get username() {
        return this._username;
    }

    public set username(value) {
        this._username = value;
    }

    public get password() {
        return this._password;
    }

    public set password(value) {
        this._password = value;
    }

    public verificarCredenciales (userInput: string, passwordinput: string): void {
        if (userInput && passwordinput && userInput === this._username && passwordinput === this._password) {
            ConsoleUI.mostrarInterfaz();
        } else {
            console.log("Credenciales incorrectas. Acceso denegado");
        }
    }
}

const prompt = promptSync(); 
const userInput = prompt("Ingrese el nombre de usuario: ") || ""; 
const passwordinput = prompt("Ingrese la contraseña: ") || ""; 

const loginInstance = new Login("Grupo POO", "admin123");
loginInstance.verificarCredenciales (userInput, passwordinput);