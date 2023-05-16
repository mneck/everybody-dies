import { useParams } from "react-router-dom";

function Review(props) {
  const { id } = useParams();

  return (
    <div>
      <h1>Review Document</h1>
      <pre>{JSON.stringify(props.answers, null, 2)}</pre>
    </div>
  );
  // create a route called Documents/:id ...
  // then use navigate to get id
  // then use findById
  // next steps: pass Id of user with AuthContext
  // that route will then find all that have that owner
  // then return
  // create document with dynamic route with id + review
  // then pass id of document to backend and grab it from there
  // add
}

export default Review;
