export default async function handler(req, res) {
    const { method, query } = req;
  
    if (method !== 'GET') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }
  
    try {
        // Use the query parameters as needed
        const { shortenLink } = query;
        console.log(shortenLink)

        // Perform a fetch operation or any other logic to get data based on the shortenLink
        // const response = await fetch(`https://api.example.com/link/${shortenLink}`);
        // const data = await response.json();

        // Return the fetched data
        return res.status(200).json({result: shortenLink});
    } catch (error) {
        console.error('Error fetching data:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}