/*
- Model Tests: Check if the models are being created and manipulated correctly.
- Route Tests: Ensure that the routes are functioning and returning the expected results.
- Integration Tests: Ensure that all the components work together.*/

import request from "supertest";
import app from "./crud-rest-mongoose";
import { User, Post } from "./crud-rest-mongoose";

describe("POST Endpoints", () => {
    it("should create a new post", async () => {
        const res = await request(app).post("/create").send({
            title: "Test Title",
            body: "Test Body",
            // ... Add author if needed
        });

        expect(res.statusCode).toEqual(201);
        expect(res.body.title).toEqual("Test Title");
    });

    it("should register a new user", async () => {
        const res = await request(app).post("/register").send({
            name: "Paul",
            email: "paul@test.com",
            password: "securepassword",
        });

        expect(res.statusCode).toEqual(201);
        expect(res.body.name).toEqual("Paul");
    });
});

/*** -------------------------------- ***/

describe("GET Endpoints", () => {
    it("should get a post by ID", async () => {
        const post = new Post({
            title: "Test Title",
            body: "Test Body",
            // ... Add author if needed
        });
        await post.save();

        const res = await request(app).get(`/posts/${post.id}`);

        expect(res.statusCode).toEqual(200);
        expect(res.body.title).toEqual("Test Title");
    });
});

/*** -------------------------------- ***/
describe("PUT Endpoints", () => {
    it("should update a user", async () => {
        const user = new User({
            name: "Paul",
            email: "paul@test.com",
            password: "securepassword",
        });
        await user.save();

        const res = await request(app).put(`/users/${user.id}`).send({
            name: "Paul Updated",
        });

        expect(res.statusCode).toEqual(200);
        expect(res.body.name).toEqual("Paul Updated");
    });
});

/*** -------------------------------- ***/
describe("DELETE Endpoints", () => {
    it("should delete a user", async () => {
        const user = new User({
            name: "Paul",
            email: "paul@test.com",
            password: "securepassword",
        });
        await user.save();

        const res = await request(app).delete(`/users/${user.id}`);

        expect(res.statusCode).toEqual(200);
        expect(res.body.name).toEqual("Paul");
    });
});
