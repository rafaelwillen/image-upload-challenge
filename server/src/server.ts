import build from "./app";

// env.config();
console.log(process.env);

const port = (process.env.PORT || 3000) as number;

async function main() {
  try {
    const app = build();
    const address = await app.listen({ port });
    console.log(`Server running on ${address}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

main();
