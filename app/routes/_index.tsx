import { Link } from "@remix-run/react";
import { Page, Text } from "@shopify/polaris";
import { sections } from "../data/sections";

export default function Index() {
  return (
    <Page title="Section Store">
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "20px"
      }}>
        {sections.map((section) => (
          <Link
            to={`/sections/${section.slug}`}
            key={section.slug}
            prefetch="intent"
            style={{
              border: "1px solid #e0e0e0",
              borderRadius: "12px",
              background: "white",
              textDecoration: "none",
              color: "inherit",
              overflow: "hidden",
              cursor: "pointer"
            }}
          >
            <img
              src={section.image}
              alt={section.title}
              style={{ width: "100%", display: "block" }}
            />
            <div style={{ display: "flex", justifyContent: "space-between", padding: "12px" }}>
              <Text variant="bodyMd" as="p" color="subdued">{section.title}</Text>
              <Text variant="bodyMd" as="p" color="subdued">{section.price}</Text>
            </div>
          </Link>
        ))}
      </div>
    </Page>
  );
}