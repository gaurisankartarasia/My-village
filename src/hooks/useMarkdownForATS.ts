import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { type Attraction } from "@/types";

const modules = import.meta.glob("/src/content/**/*.mdx", { eager: false });

export function useAttractionLoader() {
  const { slug } = useParams<{ slug: string }>();
  const [Content, setContent] = useState<React.ComponentType | null>(null);
  const [frontmatter, setFrontmatter] = useState<Attraction | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    async function loadAttraction() {
      if (!slug) {
        setError("Attraction slug is missing from the URL.");
        setLoading(false);
        return;
      }

      const modulePath = `/src/content/${slug}.mdx`;
      const importer = modules[modulePath];

      if (!importer) {
        console.error(`MDX module not found: ${modulePath}`);
        setError("Content not found");
        setLoading(false);
        return;
      }

      try {
        const module = (await importer()) as {
          default: React.ComponentType;
          frontmatter: Attraction;
        };

        if (mounted) {
          setContent(() => module.default);
          setFrontmatter(module.frontmatter);
        }
      } catch (e) {
        if (mounted) {
          console.error(`Failed to load content: ${modulePath}`, e);
          setError("Failed to load the page. It is not you, it is us.");
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    setLoading(true);
    setError(null);
    setContent(null);
    setFrontmatter(null);
    loadAttraction();

    return () => {
      mounted = false;
    };
  }, [slug]);

  return { Content, frontmatter, loading, error };
}
