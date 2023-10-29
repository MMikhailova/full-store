import { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Grid,
    Card,
    CardActionArea,
    CardContent,
    Typography
} from '@mui/material';
import Loading from './Loading';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get('http://localhost:3000/');
                if (res.status !== 200) {
                    throw new Error(
                        `Failed to fetch data with status: ${res.status}`
                    );
                } else {
                    setProducts(res.data.products);
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        getProducts();
    }, []);
    return (
        <div className="products">
            {loading && <Loading />}
            {error && <p>{error}</p>}
            <Grid width={'fit-content'} container spacing={4}>
                {products &&
                    products.map((product) => (
                        <Grid
                            key={product.id}
                            item
                            lg={4}
                            md={4}
                            sm={6}
                            xs={12}
                        >
                            <Card sx={{ p: 5 }}>
                                <CardActionArea>
                                    <img
                                        style={{
                                            objectFit: 'contain',
                                            height: '200px',
                                            width: '100%'
                                        }}
                                        src={product.url}
                                        title="product image"
                                    />
                                    <CardContent>
                                        <Typography
                                            variant="overline"
                                            display="block"
                                            gutterBottom
                                            component="div"
                                        >
                                            {product.category}
                                        </Typography>
                                        <Typography
                                            variant="h5"
                                            component="div"
                                            fontWeight={"bold"}
                                        >
                                            {product.name}
                                        </Typography>
                                        <Typography
                                            variant="h5"
                                            component="div"
                                        >
                                            €{product.price}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
            </Grid>
        </div>
    );
};

export default Products;
