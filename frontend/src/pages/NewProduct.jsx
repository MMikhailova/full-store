

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useContext } from 'react';
import axios from 'axios';
import Message from '../components/message';
import { useNavigate } from 'react-router-dom';


import IsLoggedContext from '../context/isLogged';

function Copyright(props) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {'Copyright © '}
            <Link color="inherit" href="/">
                Full Store
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const defaultTheme = createTheme();

function NewProduct() {
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        category: '',
        name: '',
        price: 0,
        url: ''
    });
    const navigate = useNavigate();
    const data = useContext(IsLoggedContext);
      
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await postLogin(formData);
            setFormData({
                category: '',
                name: '',
                price: 0,
                url: ''
            });

        } catch (err) {
            console.log(err)
        }
    }

        const postLogin = async (formData) => {
            try {
                const res = await axios.post(
                    'http://localhost:3000/add-product',
                    formData,
                    { withCredentials: true }
                );
                if (res.status !== 302) {
                    throw new Error('Error while log in');
                }
            
            } catch (err) {
                console.log(err)
                navigate('/');
            }
        };
        return (
            <>
                <ThemeProvider theme={defaultTheme}>
                    <Container component="main" maxWidth="xs">
                        <CssBaseline />
                        <Box
                            sx={{
                                marginTop: 8,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}
                        >
                            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Describe your product
                            </Typography>
                            <Box
                                component="form"
                                noValidate
                                onSubmit={handleSubmit}
                                sx={{ mt: 3 }}
                            >
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="category"
                                            label="Category"
                                            name="category"
                                            type="text"
                                            autoComplete="Aparel"
                                            value={formData.category}
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            name="name"
                                            label="Product name"
                                            type="text"
                                            id="name"
                                            autoComplete="Jeans"
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            name="price"
                                            label="Price"
                                            type="number"
                                            id="price"
                                            autoComplete="80"
                                            value={formData.price}
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            name="url"
                                            label="Image"
                                            type="url"
                                            id="url"
                                            autoComplete="/https/nknk"
                                            value={formData.url}
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                </Grid>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Sell
                                </Button>
                                {error && <Message errorText={error} />}
                            </Box>
                        </Box>
                        <Copyright sx={{ mt: 5 }} />
                    </Container>
                </ThemeProvider>

            </>
        );
    }

export default NewProduct