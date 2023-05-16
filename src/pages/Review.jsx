import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

function Review(props) {
  const { id } = useParams();
  const [document, setDocument] = useState(null);

  useEffect(() => {
    axios.get(`/api/document/${id}`).then((response) => {
      setDocument(response.data);
    });
  }, [id]);

  if (!document) {
    return <div>Loading...</div>;
  }

  // <pre>{JSON.stringify(props.answers, null, 2)}</pre>
  // create a route called Documents/:id ...
  // then use navigate to get id
  // then use findById
  // next steps: pass Id of user with AuthContext
  // that route will then find all that have that owner
  // then return
  // create document with dynamic route with id + review
  // then pass id of document to backend and grab it from there

  return (
    <div>
      <h1>{document.title}</h1>
      {document.answers.map((answer) => (
        <div key={answer._id["$oid"]}>
          <p>{answer.cueId}</p>
          <p>{answer.answer}</p>
        </div>
      ))}
    </div>
  );
}

export default Review;
