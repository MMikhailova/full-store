
import { Container } from '@mui/material';
import DrawerAppBar from '../components/NavBar';
import Products from '../components/Products'

const Home = () => {
  return (
      <>
          <DrawerAppBar />
          <Container
              maxWidth="xlg"
              sx={{pt:15,
                  width: '100%',
                  height:"3000px",
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                backgroundColor: 'lightBlue'
              }}
          >
              <Products />
          </Container>
      </>
  );
          
}

export default Home
