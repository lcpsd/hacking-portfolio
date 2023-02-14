import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "qp833153",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false,
});
