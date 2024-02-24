import Post from "../../components/Post";
//import Counter from "../../components/Counter";
export const metadata = {
  title: "NextJS Course App | Code Playground!...",
  description: "NextJS test page!",
};

const Test = () => {
  return (
    <main>
      <h1>Test Page!</h1>
      <p>
        <a href="/">Homepage</a>
      </p>
      {/* <Counter /> */}
      <Post author="Mohamed" body="Welcome, I am Mohamed" />
      <Post author="Ehab" body="Welcome, I am Ehab" />
      <Post author="Ghada" body="Welcome, I am Ghada" />
      <Post author="Sarah" body="Welcome, I am Sarah" />
    </main>
  );
};

export default Test;
