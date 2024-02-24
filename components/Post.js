const Post = (props) => {
  return (
    <main>
      <div style={{ paddingTop: "100px" }}>
        <div
          style={{
            width: "400px",
            maxHeight: "250px",
            margin: "-100px auto",
            display: "flex",
            flexDirection: "column",
            border: "1px solid #fff",
            lineHeight: ".95",
            padding: "20px 10px",
          }}
        >
          <h1 style={{ margin: "0", padding: "0" }}>{props.author}</h1>
          <p style={{ margin: "0", padding: "0" }}>{props.body}</p>
        </div>
      </div>
    </main>
  );
};

export default Post;
