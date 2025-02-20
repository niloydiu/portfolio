// import { config } from "dotenv";
// config();

// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

import { config } from "dotenv";
config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // Apply these headers to the PDF file
        source: "/niloy.pdf",
        headers: [
          {
            key: "Content-Type",
            value: "application/pdf",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
