import { type Attraction } from "@/types";
import { Helmet } from "react-helmet-async";

interface SlugContentProps {
  Content: React.ComponentType;
  frontmatter: Attraction;
}

export default function SlugContent({
  Content,
  frontmatter,
}: SlugContentProps) {
  return (
    <section className="py-12 px-4">
      <Helmet>
        <title>{frontmatter.title} - Badamba Attractions</title>
        <meta name="description" content={frontmatter.description} />
      </Helmet>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{frontmatter.title}</h1>
        {frontmatter.imageUrl && (
          <div className="flex justify-start mb-6">
            <img
              src={frontmatter.imageUrl}
              alt={frontmatter.title}
              className="w-full max-w-2xl h-auto object-contain rounded-lg"
              loading="lazy"
            />
          </div>
        )}
        <p className="text-lg mb-4">{frontmatter.description}</p>
        <div className="mb-6 flex flex-wrap gap-2">
          <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold opacity-70">
            Last edited: {frontmatter.lastEdited}, {frontmatter.author}
          </span>
        </div>
        <article className="prose prose-lg max-w-none">
          <Content />
        </article>
      </div>
    </section>
  );
}
