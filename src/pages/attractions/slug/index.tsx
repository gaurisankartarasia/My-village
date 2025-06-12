import { lazy } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { useAttractionLoader } from "@/hooks/useMarkdownForATS";

const PageNotWritten = lazy(() => import("@/components/error/PageNotWritten"));
const AttractionContent = lazy(
  () => import("@/components/attractions/slug/attraction-details")
);

function AttractionDetail() {
  const { Content, frontmatter, loading, error } = useAttractionLoader();

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

  return <AttractionContent Content={Content} frontmatter={frontmatter} />;
}

export default AttractionDetail;
