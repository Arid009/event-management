import { useNavigate } from "react-router-dom";


const ErrorPage = () => {

    const navigate = useNavigate()

    const handleGoBack=()=>{
        navigate(-1)
    }

    return (
        <div className="text-center bg-cyan-200 h-[99vh] flex justify-center items-center">
            <div>
            <h1 className="text-4xl">Ooops!</h1>
            <button onClick={handleGoBack} className="btn mt-4 bg-cyan-300">Go Back</button>
            </div>

        </div>
    );
};

export default ErrorPage;