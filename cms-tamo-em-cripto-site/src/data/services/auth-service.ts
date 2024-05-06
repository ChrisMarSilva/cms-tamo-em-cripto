import { getStrapiURL } from "@/lib/utils";

interface RegisterUserProps {
  username: string;
  password: string;
  email: string;
}

interface LoginUserProps {
  identifier: string;
  password: string;
}

//const baseUrl = getStrapiURL();

// https://fake-store-api-docs.vercel.app/
//https://fakeapi.platzi.com/en/rest/products-filter/
// https://api.escuelajs.co/docs#/
// "email": "john@mail.com",
// "password": "changeme" 

export async function registerUserService(userData: RegisterUserProps) {
  //const url = new URL("/api/auth/local/register", baseUrl);
  const url = new URL("https://api.escuelajs.co/api/v1/auth/login");

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 'email': userData.email, 'password': userData.password }), // JSON.stringify({ ...userData }),
      cache: "no-cache",
    });

    return response.json();
  } catch (error) {
    console.error("Registration Service Error:", error);
  }
}

export async function loginUserService(userData: LoginUserProps) {
  //const url = new URL("/api/auth/local", baseUrl);
  const url = new URL("https://api.escuelajs.co/api/v1/auth/login");

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ 'email': userData.identifier, 'password': userData.password }), // JSON.stringify({ ...userData }),
      cache: "no-cache",
    });

    return response.json();
  } catch (error) {
    console.error("Login Service Error:", error);
    throw error;
  }
}