import request from "supertest";
import { app } from "../app";

describe("GET /", () => {
  it("should respond with API HOTEL MIRANDA", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toContain("API HOTEL MIRANDA");
  });
});
