import crypto from "crypto";

import { NextResponse } from "next/server";
const SECRET_KEY = process.env.ENCRYPTION_SECRET_KEY as string;
const IV_LENGTH = 16;

export async function POST(req: Request) {
  try {
    const { data } = await req.json();

    const iv = crypto.randomBytes(IV_LENGTH);
    const cipher = crypto.createCipheriv(
      "aes-256-cbc",
      Buffer.from(SECRET_KEY, "hex"),
      iv
    );
    const encrypted = Buffer.concat([cipher.update(data), cipher.final()]);
    const response = `${iv.toString("hex")}:${encrypted.toString("hex")}`;

    return NextResponse.json({
      response
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Erro ao criptografar a senha", error },
      { status: 500 }
    );
  }
}
