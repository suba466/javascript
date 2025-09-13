import { useLocation } from "react-router-dom";

const Articlelist = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");

  const articles = [
    { id: 1, title: "React Basics", category: "tech" },
    { id: 2, title: "Healthy Living Tips", category: "health" },
    { id: 3, title: "AI in 2025", category: "tech" },
    { id: 4, title: "Yoga for Beginners", category: "health" },
    { id: 5, title: "Cybersecurity Trends", category: "tech" }
  ];

  const filteredArticles = category
    ? articles.filter(article => article.category === category)
    : articles;

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Articles {category && `in ${category}`}</h2>
      <ul>
        {filteredArticles.map(article => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Articlelist;
