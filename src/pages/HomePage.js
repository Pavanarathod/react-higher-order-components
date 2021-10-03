import { useSelector } from "react-redux";
import Header from "../components/Header";
import Layout from "./Layout";

const HomePage = () => {
  const com = useSelector((state) => state.comments);
  const { comments } = com;

  return (
    <Layout>
      <Header />
      {comments.length > 0 ? (
        <>
          <h1>All comments</h1>
          {comments.map(({ comment }, index) => (
            <ul key={index}>
              <li>{comment}</li>
            </ul>
          ))}
        </>
      ) : (
        <h1>No comments Yet</h1>
      )}
    </Layout>
  );
};

export default HomePage;
