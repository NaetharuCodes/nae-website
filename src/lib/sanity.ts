import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "vyupgd85",
  dataset: "production",
  useCdn: true,
  apiVersion: "2025-02-19",
});
