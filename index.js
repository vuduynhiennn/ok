const axios = require("axios");
const fs = require("fs");
//vu duy nhien
const getQuote = async () => {
  try {
    const { data } = await axios.get("https://quotes.rest/qod?language=en");
    const quote = data.contents.quotes[0].quote;
    const author = data.contents.quotes[0].author;

    console.log("new quote", `"${quote}"`);

    return {
      quote,
      author,
    };
  } catch (err) {
    console.error(err.message);
    return {};
  }
};

const generate = async () => {
  const { quote, author } = await getQuote();

  if (!quote) return;

  fs.writeFileSync("README.md", `_**${quote}**_\n\n${author} _\n\n[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=vuduynhiennn&layout=compact)](https://github.com/vuduynhiennn)`);
};

generate();
