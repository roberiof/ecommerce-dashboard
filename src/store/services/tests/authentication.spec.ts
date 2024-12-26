import axios from "axios";
import { describe, it, expect, vi, Mock } from "vitest";

import { SignInForm } from "@/validations/login/login";

import { executeLogin } from "../authentication";
import { baseURL } from "../axios";

const mockedAxios = axios as unknown as {
  post: Mock;
};

vi.mock("axios", () => ({
  default: {
    post: vi.fn()
  }
}));

describe("executeLogin", () => {
  it("should return accessToken when login is successful", async () => {
    const mockData: SignInForm = {
      email: "test@example.com",
      password: "password123"
    };

    const mockResponse = {
      data: {
        "access-token": "mockAccessToken"
      }
    };

    mockedAxios.post.mockResolvedValueOnce(mockResponse);

    const result = await executeLogin(mockData);

    expect(mockedAxios.post).toHaveBeenCalledWith(`${baseURL}/login`, {
      body: {
        email: mockData.email,
        password: mockData.password
      }
    });
    expect(result).toEqual({ error: null, accessToken: "mockAccessToken" });
  });

  it("should return an error when login fails with an Error object", async () => {
    const mockData: SignInForm = {
      email: "test@example.com",
      password: "password123"
    };

    const mockError = new Error("Invalid credentials");

    mockedAxios.post.mockRejectedValueOnce(mockError);

    const result = await executeLogin(mockData);

    expect(mockedAxios.post).toHaveBeenCalledWith(`${baseURL}/login`, {
      body: {
        email: mockData.email,
        password: mockData.password
      }
    });
    expect(result).toEqual({ error: "Invalid credentials", accessToken: null });
  });

  it("should return an unknown error when login fails with a non-Error object", async () => {
    const mockData: SignInForm = {
      email: "test@example.com",
      password: "password123"
    };

    const mockError = { status: 500, message: "Server error" };

    mockedAxios.post.mockRejectedValueOnce(mockError);

    const result = await executeLogin(mockData);

    expect(mockedAxios.post).toHaveBeenCalledWith(`${baseURL}/login`, {
      body: {
        email: mockData.email,
        password: mockData.password
      }
    });
    expect(result).toEqual({ error: "Unknown error", accessToken: null });
  });
});
