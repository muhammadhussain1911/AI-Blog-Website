
import { assets } from '../assets/assets';
import { useAppContext } from '../context/AppContext';
const Navbar = () => {
    
    const {navigate, token} = useAppContext();
  return (
    <>
        <div className='flex justify-between items-center py-2 mx-8 sm:mx-20 xl:mx-32'>
            <img src={assets.logo} alt="logo" />
            <button onClick={()=> {
              if (token) {
                navigate('/admin'); // already logged in
              } else {
                navigate('/login'); // not logged in, go to login
              }
            }} className='flex gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5'>{token ? 'Dashboard' : 'Login'}
                <img src= {assets.arrow} className='w-3' alt="arrow" />
            </button>
        </div>
    </>
  )
}

export default Navbar