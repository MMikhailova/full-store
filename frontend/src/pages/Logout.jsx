
import axios from "axios";
import { useEffect ,useState,useContext} from "react";
import Message from "../components/message";
import IsLoggedContext from '../context/isLogged';
import DrawerAppBar from "../components/NavBar";


const Logout = () => {
    const [error, setError] = useState('')
    const data = useContext(IsLoggedContext);
    useEffect(() => {
        const getLogOut = async () => {
            try {
                const res = await axios.get(
                    'http://localhost:3000/logout',
                    { withCredentials: true }
                );
                if (res.status !== 200) {
                    throw new Error('Failed to log out')
                }
                data.setIsLogged(false)  
              
            } catch (err) {
                setError(err)
            }
        }
        getLogOut()
    }, [])

  return (
      <div>
          <DrawerAppBar />
          <Message
              errorText={error ? error : 'You Logged Out successfully'}
              severity={error ? 'error' : 'success'}
          />
      </div>
  );
}

export default Logout
