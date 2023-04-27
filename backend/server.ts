import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import{analyzeQuiz} from "./quiz.ts";

const app = new Application();
const router = new Router();

// Define the root route
router.get("/", (context) => {
  context.response.body = "Welcome to the Deno API using Oak!";
});

// Define the /api/users route
router.get("/api/users", (context) => {
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ];

  context.response.body = users;
});

router.post("/analyze-results", async (context) => {
    // Check if the request has a body
    if (!context.request.hasBody) {
      context.throw(400, "Bad Request: No data provided.");
    }
  
    // Parse the results as JSON
    const quizResults = await context.request.body({ type: "json" }).value;
    const recommendedProducts =  await analyzeQuiz(quizResults)

    context.response.body = recommendedProducts;
});


// Register the router with the application
app.use(router.routes());
app.use(router.allowedMethods());

// Start the server
console.log("Listening on http://localhost:8000");
await app.listen({ port: 8000 });
