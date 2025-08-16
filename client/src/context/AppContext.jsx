import { createContext, useContext, useEffect, useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Loader from "../components/Loader";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const AppContext = createContext();

export const AppProvider = ({children}) => {
    const navigate = useNavigate()
    const [token, setToken] = useState(null)
    const [blogs, setBlogs] = useState([])  
    const [input, setInput] = useState("")
    const [loading, setLoading] = useState(true)

    const fetchBlogs = async () => {
        try {
            const {data} = await axios.get('/api/blog/all');
            if (data.success) {
                setBlogs(data.blogs)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    // Verify token on initial load
    const verifyToken = async () => {
        try {
            const storedToken = localStorage.getItem('token')
            if (storedToken) {
                // Verify token with backend
                const { data } = await axios.post('/api/admin/verify-token', {}, {
                    headers: {
                        Authorization: storedToken
                    }
                })
                
                if (data.success) {
                    setToken(storedToken)
                    axios.defaults.headers.common['Authorization'] = storedToken
                } else {
                    localStorage.removeItem('token')
                    setToken(null)
                }
            }
        } catch (error) {
            localStorage.removeItem('token')
            setToken(null)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        verifyToken()
        fetchBlogs()
    }, [])

    // Automatically handle 401 unauthorized errors
    axios.interceptors.response.use(
        response => response,
        error => {
            if (error.response?.status === 401) {
                localStorage.removeItem('token')
                setToken(null)
                navigate('/login')
                toast.error('Session expired. Please login again.')
            }
            return Promise.reject(error)
        }
    )

    const value = {
        axios,
        token,
        setToken: (newToken) => {
            if (newToken) {
                localStorage.setItem('token', newToken)
                axios.defaults.headers.common['Authorization'] = newToken
            } else {
                localStorage.removeItem('token')
                delete axios.defaults.headers.common['Authorization']
            }
            setToken(newToken)
        },
        blogs,
        setBlogs,
        input,
        setInput,
        navigate,
        loading
    }

    if (loading) {
        return <Loader/> // Or your custom loader component
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext)
}