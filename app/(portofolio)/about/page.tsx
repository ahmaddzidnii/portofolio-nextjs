const AboutPage = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/comments", { cache: "no-store" });
  const todo = await data.json();

  return <div>{JSON.stringify(todo)}</div>;
};

export default AboutPage;
