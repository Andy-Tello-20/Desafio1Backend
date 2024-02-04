class ProductsManager {

    static id = 0

    constructor() {
        this.products = []
    }


    addProduct(title, description, price, thumbnail, code, stock) {
        // Validar que todos los campos sean obligatorios, es decir que ningun parametro sea Falsy
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.error('Todos los campos son obligatorios')
        }

        // Validar que el campo "code" no se repita, si lo hace no "pushea" un nuevo producto
        let codeExists = this.products.some(product => product.code === code)
        if (codeExists) {

            codeExists = this.products.find(product => product.code === code)

            console.error(`Ya existe un producto con el código: ${codeExists.code}. Error al ingresar nuevo producto`)
        } else {
            this.products.push({
                title,
                description,
                price,
                thumbnail,
                code,
                stock,
                id: ProductsManager.id //Si bien no esta disponible como argumento en "addProducts" se agrega como una propiedad mas del objeto ingresado en  "this.Products". Entenderlo como si fuera una propiedad pre-establecida para cada nuevo producto que se instancie, que no se puede alterar o viene por defecto 

            })
        }

        ProductsManager.id++

    }

    getProducts() {
        return this.products
    }

    getProductById(idBuscado) {

        let elementoBuscado = this.products.find((i) => i.id === idBuscado)

        if (!elementoBuscado) {
            console.log("Not Found")
        } else {

            return console.log(`Se encontro el producto con titulo: ${elementoBuscado.title}`)
        }

    }
}


const producto1 = new ProductsManager

producto1.addProduct("tituloNro1", "descripcionNro1", 2500, "Img1", 1234, 6)
producto1.addProduct("tituloNro2", "descripcionNro2", 4500, "Img2", 2346, 8)
producto1.addProduct("tituloNro3", "descripcionNro3", 600, "Img3", 2346, 12)

console.log(producto1.getProducts())

producto1.getProductById(1)