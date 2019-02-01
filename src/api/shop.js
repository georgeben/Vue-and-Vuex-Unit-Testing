/*Mock API */

const products = [
    {
        id: 1,
        name: 'Gold Sneakers',
        description: 'Grey and blue sneakers with white sole.',
        price: 3000,
        quantity: 1,
    },
    {
        id: 2,
        name: 'Shorts',
        description: 'GNice blue shorts for men.',
        price: 3000,
        quantity: 1,
    },
    {
        id: 3,
        name: 'Jacket',
        description: 'Brown gucci jacket with grey lining.',
        price: 3000,
        quantity: 1,
    }
];

const users = [
    {
        id: 1,
        name: 'George Benjamin',
        email: 'msdcconnect@gmail.com',
        password: 'george',
    },
]

export default {
    getAllProducts(){
        return products;
    },

    findItem(id) {
        console.log(1, "Finding item with id", id);
        let found = products.find(product => product.id == id);
        console.log("Found it", found)
        return found;
      },

    addNewProduct({name, description, price}){
        console.log("Last product", products[products.length-1])
        let last_id = products[products.length-1].id;
        products.push({
            id: ++last_id,
            name,
            description,
            price,
        })
    },

    removeProduct(id){
        products.forEach((item, index) => {
            if(item.id == id){
                products.splice(index, 1);
            }
        })
    },
    updateProduct(id, product){
        console.log("New product details", product)
        console.log("In the shop function", id)
        products.forEach((item, index) => {
            if(item.id == id){
                item = product;
                console.log("Updated product", item)
            }
        })
    },

    getUserById(id){
        return users.reduce(user => user.id != id)
    },

    getUserByEmail(email){
        return users.reduce(user => user.email != email)
    }
}