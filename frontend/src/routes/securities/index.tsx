import { SecuritiesPage } from "@/components/pages";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/securities/")({
  component: SecuritiesPage,
});
