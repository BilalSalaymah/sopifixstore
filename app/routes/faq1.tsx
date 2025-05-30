import { Card, Page, Button, Text, Layout, Badge } from "@shopify/polaris";
import { useState } from "react";

export default function FAQ1() {
  const [showPopup, setShowPopup] = useState(false);

  const handlePurchaseClick = () => {
    // Hier zou je logica zetten om door te sturen naar Shopify's checkout
    // Voor nu simuleer je gewoon een bevestiging
    alert("Redirecting to Shopify payment approval page...");
  };

  return (
    <Page title="FAQ 1">
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <Text variant="headingMd" as="h2">
              Buy it now
            </Text>
            <div style={{ margin: "20px 0" }}>
              <Button onClick={() => setShowPopup(true)} primary>
                Purchase section - €9
              </Button>
            </div>
            <Text variant="bodyMd">
              A simple and professional FAQ section layout to build trust and
              answer customer questions.
            </Text>
          </Card>
        </Layout.Section>
      </Layout>

      {showPopup && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 999,
          }}
        >
          <Card title="FAQ 1" sectioned>
            <Text variant="headingMd">A simple FAQ layout</Text>
            <div style={{ margin: "20px 0" }}>
              <Button onClick={handlePurchaseClick} primary>
                Confirm Purchase - €9
              </Button>
            </div>
            <Button onClick={() => setShowPopup(false)} plain>
              Cancel
            </Button>
          </Card>
        </div>
      )}
    </Page>
  );
}