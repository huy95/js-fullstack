import { Center, Container, Heading, VStack, Button, Box, Input } from "@chakra-ui/react";
import { useState } from "react";
import { useProductStore } from "../store/product";

const CreatePage = () => {
    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        image: ""
    });

    const { createProduct } = useProductStore();

    const handleAddProduct = async () => {
        const productToCreate = {
            ...newProduct,
            price: Number(newProduct.price)  // Ép kiểu về number
        };
        const { success, message } = await createProduct(productToCreate)
        
        if (success) {
            setNewProduct({ name: "", price: "", image: "" });
            alert("Product added successfully");
        } else {
            alert(message);
        }
    }
    return (
        <Container maxW={'container.sm'}>
            <VStack spacing={8}>
                <Heading>
                    Create New Product
                </Heading>
                <Box w={'full'}>
                    <VStack>
                        <Input
                            placeholder="Product Name"
                            value={newProduct.name}
                            name="name"
                            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                        />
                        <Input
                            placeholder="Price"
                            value={newProduct.price}
                            name="price"
                            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}

                        />
                        <Input
                            placeholder="Image URL"
                            value={newProduct.image}
                            name="image"
                            onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                        />
                        <Button colorScheme="red" onClick={handleAddProduct} w={'full'}>Add Product</Button>
                    </VStack>
                </Box>
            </VStack>


        </Container>
    );
}

export default CreatePage;