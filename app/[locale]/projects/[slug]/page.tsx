import { notFound } from "next/navigation";
import ProjectPage from "@/components/project-page";
import { projects } from "@/lib/data";

interface PageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { locale, slug } = await params;

  if (!["en", "fa", "ps"].includes(locale)) {
    notFound();
  }

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <ProjectPage
      project={project}
      locale={locale}
    />
  );
}