import request from "supertest";
import app from "./crud-rest-pg"; // Make sure to update the path

describe("User API", () => {
    let userId: number; // to store the ID of the registered user

    it("should register a new user", async () => {
        const user = {
            name: "John Doe",
            email: "john.doe@example.com",
        };

        const res = await request(app).post("/register").send(user);
        expect(res.statusCode).toEqual(201);
        expect(res.body.name).toEqual(user.name);
        expect(res.body.email).toEqual(user.email);

        // Store the user ID for the next tests
        userId = res.body.id;
    });

    it("should retrieve all users", async () => {
        const res = await request(app).get("/users");
        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    it("should retrieve a specific user", async () => {
        const res = await request(app).get(`/users/${userId}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body.id).toEqual(userId);
    });

    it("should update a user", async () => {
        const updatedData = {
            name: "Jane Doe",
            email: "jane.doe@example.com",
        };

        const res = await request(app)
            .put(`/users/${userId}`)
            .send(updatedData);
        expect(res.statusCode).toEqual(200);
        expect(res.body.name).toEqual(updatedData.name);
        expect(res.body.email).toEqual(updatedData.email);
    });

    it("should delete a user", async () => {
        const res = await request(app).delete(`/users/${userId}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body.id).toEqual(userId);
    });
});
