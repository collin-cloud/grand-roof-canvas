import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider, type FilledContext } from "react-helmet-async";
import App from "./App";
import "./index.css";

export interface RenderResult {
  html: string;
  helmet: {
    title: string;
    meta: string;
    link: string;
    script: string;
    htmlAttributes: string;
    bodyAttributes: string;
  };
}

export function render(url: string): RenderResult {
  const helmetContext: Partial<FilledContext> = {};

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  );

  const { helmet } = helmetContext as FilledContext;

  return {
    html,
    helmet: {
      title: helmet.title.toString(),
      meta: helmet.meta.toString(),
      link: helmet.link.toString(),
      script: helmet.script.toString(),
      htmlAttributes: helmet.htmlAttributes.toString(),
      bodyAttributes: helmet.bodyAttributes.toString(),
    },
  };
}
