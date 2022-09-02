// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    { id: 1, name: "John Doe" },
    { id: 2, name: "John Doe" },
    { id: 3, name: "John Doe" },
  ]);
}
