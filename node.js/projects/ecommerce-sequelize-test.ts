import request from "supertest";
import app from "./ecommerce-sequelize"; // Adjust the path as necessary

describe("Products API", () => {
    it("should retrieve all products", async () => {
        const res = await request(app).get("/products");
        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBe(true);
    });
});

/*** -------------------------------------------------- ***/
describe("Cart API", () => {
    it("should add a product to user cart", async () => {
        const userId = 1; // Assume a user with ID 1 exists
        const productToAdd = {
            productId: 1, // Assume a product with ID 1 exists
            quantity: 2,
        };

        const res = await request(app)
            .post(`/users/${userId}/cart/products`)
            .send(productToAdd);

        expect(res.statusCode).toEqual(201);
        expect(res.body.quantity).toEqual(2);
        expect(res.body.productId).toEqual(1);
    });

    it("should update a product quantity in the user cart", async () => {
        const userId = 1;
        const productIdToUpdate = 1; // Assume the product is already in the cart
        const updatedQuantity = {
            quantity: 5,
        };

        const res = await request(app)
            .put(
                `/users/${userId}/cart/products/${productIdToUpdate}`,
            )
            .send(updatedQuantity);

        expect(res.statusCode).toEqual(200);
        expect(res.body.quantity).toEqual(5);
    });
});

/*** -------------------------------------------------- ***/
