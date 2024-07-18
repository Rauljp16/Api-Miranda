import request from "supertest";
import { app } from "../app";
import { generateAccessToken } from "../services/loginServices";

const TOKEN_SECRET = generateAccessToken(process.env.USER);

describe("RUTA /", () => {
  it("Comprueba que su estatus es 200", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
  });

  it("Comprueba que contiene el texto API HOTEL MIRANDA", async () => {
    const response = await request(app).get("/");
    expect(response.text).toContain("API HOTEL MIRANDA");
  });
});

describe("RUTA /ROOMS", () => {
  it("Comprueba que el status sea 200", async () => {
    const response = await request(app)
      .get("/rooms")
      .set("Authorization", "Bearer " + TOKEN_SECRET);
    expect(response.status).toBe(200);
  });

  it("Comprueba que devuelve un array ", async () => {
    const response = await request(app)
      .get("/rooms")
      .set("Authorization", "Bearer " + TOKEN_SECRET);
    expect(response.body).toBeInstanceOf(Array);
  });

  it("Comprueba que cada objeto tiene las propiedades indicadas", async () => {
    const response = await request(app)
      .get("/rooms")
      .set("Authorization", "Bearer " + TOKEN_SECRET);
    response.body.forEach((rooms) => {
      expect(rooms).toMatchObject({
        Foto: expect.any(String),
        BedType: expect.any(String),
        Status: expect.any(String),
        Rate: expect.any(Number),
        Amenities: expect.any(Array),
      });
    });
  });

  it("Comprueba que el token es invalido", async () => {
    const response = await request(app)
      .get("/rooms")
      .set("Authorization", "Bearer " + " ");
    expect(response.status).toBe(401);
  });
});

describe("RUTA /ROOMS/ID", () => {
  it("Comprueba que el status sea 200", async () => {
    const response = await request(app)
      .get("/rooms/101")
      .set("Authorization", "Bearer " + TOKEN_SECRET);
    expect(response.status).toBe(200);
  });

  it("Comprueba que cada objeto tiene las propiedades indicadas", async () => {
    const response = await request(app)
      .get("/rooms/101")
      .set("Authorization", "Bearer " + TOKEN_SECRET);
    expect(response.body).toMatchObject({
      Foto: expect.any(String),
      BedType: expect.any(String),
      Status: expect.any(String),
      Rate: expect.any(Number),
      Amenities: expect.any(Array),
    });
  });
});
