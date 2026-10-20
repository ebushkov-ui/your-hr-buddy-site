import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App, { AppRoutes } from "./App";

export { PAGES, SITE_URL } from "./seo";

export const render = (url: string) =>
  renderToString(
    <App>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </App>,
  );
