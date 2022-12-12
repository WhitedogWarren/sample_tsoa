"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const port = process.env.PORT || 4200;
app_1.app.listen(port, () => console.log(`App running on http://localhost:${port}`));
