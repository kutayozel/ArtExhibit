import bcrypt from 'bcryptjs'

const data = {
    users: [
        {
            name: 'Kutay',
            email: 'admin@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name: 'User',
            email: 'user@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        },
    ],
    products: [
        {
            name: 'Çini bir',
            category: 'artist name',
            image: 'https://st2.myideasoft.com/idea/ez/46/myassets/products/328/dizayn-lale-desenli-cini-tabak-105-jpg.jpg?revision=1597754198',
            price: 200,
            countInStock: 3,
            rating: 5,
            numReviews: 106,
            description: 'Dragon themed çini..'
        },
        {
            name: 'Çini iki',
            category: 'artist name',
            image: 'https://cdn03.ciceksepeti.com/cicek/kc1685212-1/XL/el-yapimi-tombul-cini-vazo-mavi-beyaz-samur-firca-islemeli-kc1685212-1-828f53a825364d95931a3575129a665a.jpg',
            price: 300,
            countInStock: 40,
            rating: 2,
            numReviews: 16,
            description: ' çini..'
        },
        {
            name: 'Çini üç',
            category: 'artist name',
            image: 'https://img.zet.com/products/50945/447230_50945_1510843958_1000.JPG',
            price: 5,
            countInStock: 15,
            rating: 4.5,
            numReviews: 10,
            description: 'çini art made by ..'
        },
        {
            name: 'Çini dört',
            category: 'artist name',
            image: 'https://cdn.shopify.com/s/files/1/2508/7764/products/IMG_20190502_081214_034_1_x600.jpg?v=1560435887',
            price: 5,
            countInStock: 5,
            rating: 4.5,
            numReviews: 10,
            description: 'çini art made by ..'
        },
        {
            name: 'Çini beş',
            category: 'artist name',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd_GTu2pYjhrW7fu_W3Qfl7Ae0e7fSa2gc5w&usqp=CAU',
            price: 5,
            countInStock: 10,
            rating: 4.5,
            numReviews: 10,
            description: 'çini art made by ..'
        },
    ]
}

export default data;