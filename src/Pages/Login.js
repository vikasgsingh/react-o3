import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const handleClick=()=>{
        toast.success('welcome to Login Page')
    }
    return (
        <>
        <h2>Welcome To Login Page</h2>
        <button type="submit" onClick={handleClick}>Login</button>
        <ToastContainer position="top-center"/>

        </>
    );
}

export default Login;