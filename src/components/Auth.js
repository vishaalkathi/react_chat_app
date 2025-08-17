import { auth, provider } from '../firebase-config.js';
import { signInWithPopup } from "firebase/auth";
import "../styles/Auth.css";
import Cookie from 'universal-cookie';

const cookies = new Cookie();

export const Auth = (props) => {

    const { setIsAuth } = props;

    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            cookies.set('auth-token', result.user.refreshToken);
            setIsAuth(true);
        } catch (error) {
            console.error("Error during sign-in:", error);
        }
        
    }
    return (
    <div className="auth">
        <p> Sign In with Google to continue </p>
        <button className="auth button" onClick={signInWithGoogle}> Sign In with Google </button>
    </div>
    );
}