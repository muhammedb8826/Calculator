import { useState, useEffect } from 'react';

function Quote() {
  const [data, setData] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const url = 'https://api.api-ninjas.com/v1/quotes';
        const res = await fetch(url, {
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'XZBOGakGnoeKaEBsEJ2C0g==SlYB0NPsstmZBa5G',
          },
        });
        const json = await res.json();
        setData(json[0]);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [setData, setIsLoading]);

  if (hasError) return <div>Something went wrong!</div>;

  if (isLoading) return <div>Loading...</div>;

  return (
    <ul className="fetched-data">
      <li>
        {data.quote}
        {' - '}
        {data.author}
      </li>
    </ul>
  );
}

export default Quote;
