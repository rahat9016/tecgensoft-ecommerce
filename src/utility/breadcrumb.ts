import { IBreadcrumbs } from "@/Types/Types";

// Helper function to add breadcrumb
export const addBreadcrumb = (
  breadcrumbs: IBreadcrumbs[],
  label: string | undefined,
  url: string
) => {
  breadcrumbs.push({ label, url });
};
