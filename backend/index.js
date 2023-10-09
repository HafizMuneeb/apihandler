import express from 'express';


const app = express();

app.get('/api/products', (req, res) => {
    const products = [
        {
            id: 1,
            name: 'wooden Table',
            price: 200,
            image: 'https://cdn.pixabay.com/photo/2015/05/31/15/07/coffee-792113_1280.jpg'

        },
        {
            id: 2,
            name: 'Polyster Table',
            price: 300,
            image: 'https://cdn.pixabay.com/photo/2017/10/13/15/29/coffee-2847957_1280.jpg'

        },
        {
            id: 3,
            name: 'Fusion Table',
            price: 600,
            image: 'https://cdn.pixabay.com/photo/2015/05/25/14/29/strawberries-783351_1280.jpg'

        },
        {
            id: 4,
            name: 'wooden polyster Table',
            price: 500,
            image: 'https://cdn.pixabay.com/photo/2018/11/17/07/10/notebook-3820634_1280.jpg'

        },

    ]

    if(req.query.search) {
       const filterProducts =  products.filter(product => product.name.includes(req.query.search))
       res.send(filterProducts);
       return;
    }

    setTimeout(() => {
        res.send(products);
    }, 3000); 
})

const port = 3000;

app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
});