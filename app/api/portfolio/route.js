import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import fs from "fs/promises";
import path from "path";
import crypto from "crypto";

const DATA_FILE_PATH = path.join(process.cwd(), "data", "portfolio-data.json");

// Helper to verify admin token
async function verifyAdmin() {
  const cookieStore = await cookies();
  const tokenCookie = cookieStore.get("admin_token");
  if (!tokenCookie) return false;

  try {
    const tokenStr = Buffer.from(tokenCookie.value, "base64").toString("utf-8");
    const { payload, signature } = JSON.parse(tokenStr);

    if (payload.exp < Date.now()) return false;

    const secret = process.env.JWT_SECRET || "super_secret_cyber_security_key_321";
    const expectedSignature = crypto
      .createHmac("sha256", secret)
      .update(JSON.stringify(payload))
      .digest("hex");

    return signature === expectedSignature;
  } catch {
    return false;
  }
}

export async function GET() {
  try {
    const data = await fs.readFile(DATA_FILE_PATH, "utf-8");
    return NextResponse.json(JSON.parse(data));
  } catch (error) {
    return NextResponse.json({ error: "Failed to load portfolio data: " + error.message }, { status: 500 });
  }
}

export async function POST(req) {
  const isAdmin = await verifyAdmin();
  if (!isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const newData = await req.json();
    await fs.writeFile(DATA_FILE_PATH, JSON.stringify(newData, null, 2), "utf-8");
    return NextResponse.json({ success: true, data: newData });
  } catch (error) {
    return NextResponse.json({ error: "Failed to update portfolio data: " + error.message }, { status: 500 });
  }
}
