import CircularProgress from "@mui/material/CircularProgress";

export default function LoadingSpinner() {
  return (
    <div className="flex justify-center py-32">
      <CircularProgress />
    </div>
  );
}
