import { lazy } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { useSlugPageLoader } from "@/hooks/useSlugMD_loader";

const PageNotWritten = lazy(() => import("@/components/error/PageNotFound"));
const SlugContent = lazy(() => import("@/components/slug"));

function SlugPage() {
  const { Content, frontmatter, loading, error } = useSlugPageLoader();

  if (loading) {
    return (
      <div className="flex justify-center py-32">
        <CircularProgress />
      </div>
    );
  }

  if (error || !Content || !frontmatter) {
    return (
      <div className="max-w-7xl mx-auto py-12 px-4">
        <PageNotWritten /> 
      </div>
    );
  }

  return <SlugContent Content={Content} frontmatter={frontmatter} />;
}

export default SlugPage;
