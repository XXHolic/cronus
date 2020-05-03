import dva from "dva";
// import dva from "../node_modules/dva/src/index";
import "./index.css";
// import { createBrowserHistory } from 'dva';
// const history = createBrowserHistory();

// 1. Initialize
debugger;
const app = dva({
  // history: history,
  initialState: { products: [{ name: "dva", id: 1 }, { name: "antd", id: 2 }] }
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require("./models/example").default);
app.model(require("./models/products").default);
app.model(require("./models/count").default);

// 4. Router
app.router(require("./router").default);

// 5. Start
app.start("#root");
