import { app } from "./app";

const port = process.env.PORT || 4200;

app.listen(port, () => console.log(`App running on http://localhost:${port}`));