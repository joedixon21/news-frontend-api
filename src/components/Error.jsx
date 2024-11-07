export default function Error(props) {
  const { status, message } = props;

  return (
    <div className="error">
      <h1>{status || 404}</h1>
      <p>{message || "Not Found"}</p>
    </div>
  );
}
