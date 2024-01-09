import { useDispatch, useSelector } from 'react-redux';
import { selectErrorMessage, clearError } from '../../redux/slices/errorSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';

const Error = () => {

    const message = useSelector(selectErrorMessage)

    const dispatch = useDispatch()

    useEffect(() => {
        if (message) {
            toast.info(message)
            dispatch(clearError)
        }
    }, [message, dispatch])
    return <ToastContainer position='top-center' autoClose={2000} closeOnClick={true} />

}    


export default Error