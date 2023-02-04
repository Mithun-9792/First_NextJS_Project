export default function Home(props) {
  const posts = props.blog;
  return (
    <>
      <HomePage />
      <div style={{ padding: 30 }}>
        {posts.map((post, index) => (
          <div key={index}>
            <div style={{ padding: 20, borderBottom: "1px solid #ccc" }}>
              <h2>{post.title}</h2>
              <p>
                <b>{post.author}</b>
              </p>
              <p>{post.post}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

// Fetching data from the JSON file
import fsPromises from "fs/promises";
import path from "path";
import HomePage from "./Components/HomePage";
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "./././json/postdata.json");
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    props: objectData,
  };
}
