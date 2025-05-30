import { useParams } from "@remix-run/react";
import { Page, Text } from "@shopify/polaris";
import { sections } from "../../data/sections";

export default function SectionDetail() {
  const { slug } = useParams();
  const section = sections.find((s) => s.slug === slug);

  if (!section) {
    return <Page title="Not found"><Text variant="bodyMd">Section not found</Text></Page>;
  }

  return (
    <Page title={section.title}>
      <img src={section.image} alt={section.title} style={{ width: "100%", marginBottom: 16 }} />
      <Text variant="bodyMd">{section.description}</Text>
      <Text variant="bodyMd" tone="success" as="p" style={{ marginTop: 16 }}>
        Price: {section.price}
      </Text>
    </Page>
  );
}