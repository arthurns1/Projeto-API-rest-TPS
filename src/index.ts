import { server } from "./server/Server";
import "dotenv/config";

server.listen(process.env.PORT || 8081, () => {
  console.log(`Server lançado na porta ${process.env.PORT}`);
});
