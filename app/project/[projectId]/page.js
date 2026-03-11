import Article from "@/app/components/pages/projectDetails/Article";
import { projects } from "@/app/data/projects";

export function generateMetadata({ params: { projectId } }) {
  const project = projects[Number(projectId)];

  if (!project) {
    return {
      title: 'Unknown Project | Rahil Bin Mushfiq',
      description: 'The requested project is not found. Please visit the Portfolio section of the homepage.',
    };
  } else {
    return {
      title: `${project.title} | Project | Rahil Bin Mushfiq`,
      description: project.summary,
      alternates: {
        canonical: `https://rahil-dev.vercel.app/project/${projectId}`,
      },
      openGraph: {
        title: `${project.title} | Project | Rahil Bin Mushfiq`,
        description: project.summary,
        url: `https://rahil-dev.vercel.app/project/${projectId}`,
        siteName: 'Rahil Bin Mushfiq',
        images: [
          {
            url: project.openGraphImage,
            width: 900,
            height: 600,
            alt: `${project.title} Project Mockup`,
          },
        ],
        type: 'article',
      },
      twitter: {
        card: 'summary_large_image',
        title: `${project.title} | Project | Rahil Bin Mushfiq`,
        description: project.summary,
        domain: 'https://rahil-dev.vercel.app',
        url: `https://rahil-dev.vercel.app/project/${projectId}`,
        images: [
          {
            url: project.openGraphImage,
            width: 900,
            height: 600,
            alt: `${project.title} Project Mockup`,
          },
        ],
      },
    };
  }
}

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map(project => ({
    projectId: project.id.toString(),
  }));
}

export default function ProjectDetails({ params: { projectId } }) {
  const requestedProject = projects[Number(projectId)];

  return (
    <main id="project-details" className="mt-20 lg:mt-[86px]">
      <Article project={requestedProject} />
    </main>
  );
}
