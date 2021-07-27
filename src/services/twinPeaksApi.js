export const fetchQuote = async () => {
  const res = await fetch(
    'https://damp-cove-34137.herokuapp.com/api/quotes/random'
  );

  const { name, quoteTextOnly } = await res.json();

  return {
    name, 
    text: quoteTextOnly,
  };
};
