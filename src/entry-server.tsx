import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import "./index.css";

interface HelmetTag {
  toString(): string;
}
interface HelmetData {
  title: HelmetTag;
  meta: HelmetTag;
  link: HelmetTag;
  script: HelmetTag;
  htmlAttributes: HelmetTag;
  bodyAttributes: HelmetTag;
}

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
  const helmetContext: { helmet?: HelmetData } = {};

  const html = renderToString(
    // Helmet's exported context type varies between versions; cast for compatibility.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <HelmetProvider context={helmetContext as any}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  );

  const helmet = helmetContext.helmet!;

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
