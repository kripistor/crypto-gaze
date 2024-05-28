import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./CryptoDetail.scss";

function CryptoDetail({ id }) {
    const [currencyData, setCurrencyData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCurrencyData = async () => {
            try {
                const response = await axios.get(`/api/v1/cryptocurrency/quotes/latest`, {
                    params: {
                        id: id,
                        convert: 'USD',
                    }
                });

                const infoResponse = await axios.get(`/api/v2/cryptocurrency/info`, {
                    params: {
                        id: id,
                    }
                });

                const coinData = response.data.data[id];
                const infoData = infoResponse.data.data[id];

                const currencyDetails = {
                    name: infoData.name,
                    logo: infoData.logo,
                    description: infoData.description,
                    website: infoData.urls.website[0],
                    price: coinData.quote.USD.price,
                    priceChange: coinData.quote.USD.percent_change_24h,
                    chart: `https://s3.coinmarketcap.com/generated/sparklines/web/7d/usd/${id}.png`,
                };

                setCurrencyData(currencyDetails);
            } catch (error) {
                console.error("Error fetching currency data", error);
                setError("Failed to fetch currency data. Please try again later.");
            }
        };

        fetchCurrencyData();
    }, [id]);

    if (error) {
        return <div className='CryptocurrencyDetail-page'>{error}</div>;
    }

    if (!currencyData) {
        return <div className='CryptocurrencyDetail-page'>Loading...</div>;
    }

    return (
        <div className='CryptocurrencyDetail-page'>
            <div className='header'>
                {currencyData.name}
            </div>
            <div className='body'>
                <div className='currency-info'>
                    <img src={currencyData.logo} alt={`${currencyData.name} logo`} className='currency-logo' />
                    <div className='currency-price-change'>
                        <div className='currency-price'>
                            ${currencyData.price.toFixed(2)}
                        </div>
                        <div className={`currency-change ${currencyData.priceChange >= 0 ? 'positive' : 'negative'}`}>
                            {currencyData.priceChange.toFixed(2)}%
                        </div>
                    </div>
                    <img src={currencyData.chart} alt={`${currencyData.name} chart`} className={`currency-chart ${currencyData.priceChange >= 0 ? 'positive' : 'negative'}`} />
                    <div className='currency-description'>
                        {currencyData.description}
                    </div>
                    <div className='currency-website'>
                        <a href={currencyData.website} target="_blank" rel="noopener noreferrer">Official Website</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CryptoDetail;
