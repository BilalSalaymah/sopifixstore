// app/root.tsx
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import type { LoaderArgs } from "@remix-run/node";

import { AppProvider, Frame, Navigation } from "@shopify/polaris";
import polarisStyles from "@shopify/polaris/build/esm/styles.css?url";

// ✅ Correcte import voor CommonJS module
import pkg from "@shopify/app-bridge-react";
const AppBridgeProvider = pkg.Provider;

export function links() {
  return [
    { rel: "stylesheet", href: polarisStyles },
    { rel: "preconnect", href: "https://cdn.shopify.com" },
    {
      rel: "stylesheet",
      href: "https://cdn.shopify.com/static/fonts/inter/v4/styles.css",
    },
  ];
}

export async function loader({ request }: LoaderArgs) {
  const url = new URL(request.url);
  return {
    apiKey: process.env.SHOPIFY_API_KEY!,
    host: url.searchParams.get("host"),
  };
}

export default function App() {
  const { apiKey, host } = useLoaderData<typeof loader>();

  const navigationMarkup = (
    <Navigation location="/">
      <Navigation.Section
        items={[
          {
            label: "Section Store",
            items: [
              {
                label: "My Sections",
                onClick: () => (window.location.href = "/my-sections"),
              },
              {
                label: "Explore Sections",
                onClick: () => (window.location.href = "/library"),
              },
            ],
          },
        ]}
      />
      <Navigation.Section
        title="Apps"
        items={[
          {
            label: "My Sections",
            onClick: () => (window.location.href = "/my-sections"),
          },
        ]}
      />
    </Navigation>
  );

  return (
    <AppBridgeProvider config={{ apiKey, host: host!, forceRedirect: true }}>
      <AppProvider i18n={{}}>
        <html lang="en">
          <head>
            <Meta />
            <Links />
          </head>
          <body>
            <Frame navigation={navigationMarkup}>
              <Outlet />
            </Frame>
            <ScrollRestoration />
            <Scripts />
            <LiveReload />
          </body>
        </html>
      </AppProvider>
    </AppBridgeProvider>
  );
}