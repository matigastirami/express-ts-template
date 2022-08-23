import app from "./src/app";
import env from "./src/lib/env";
import logger from "./src/lib/logger";

const port = env.PORT;

app.listen(port, () => {
    logger.info(`Server running on port ${port}`);
});