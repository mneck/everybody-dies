import { Link } from "react-router-dom";

function DocumentCard({ title, _id }) {
  return (
    <div className="DocumentCard">
      <Link to={`/documents/${_id}`}>
        <h3>{title}</h3>
      </Link>
      <p>This is a description entry for {title}.</p>
    </div>
  );
}

export default DocumentCard;
