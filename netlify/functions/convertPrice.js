const axios = require('axios');

exports.handler = async function (event) {
    const params = event.queryStringParameters;
    const apiKey = process.env.CMC_API_KEY;  // Usa una variable de entorno para la clave API
    const apiUrl = `https://pro-api.coinmarketcap.com/v2/tools/price-conversion`;

    try {
        const response = await axios.get(apiUrl, {
            headers: {
                'Accepts': 'application/json',
                'X-CMC_PRO_API_KEY': apiKey
            },
            params: {
                amount: params.amount,
                symbol: params.symbol,
                convert: params.convert
            }
        });

        return {
            statusCode: 200,
            body: JSON.stringify(response.data)
        };
    } catch (error) {
        return {
            statusCode: error.response.status,
            body: JSON.stringify({ message: error.message })
        };
    }
};
