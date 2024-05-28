import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import "./Top100.scss";

function Top100() {
    const [top100Data, setTop100Data] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTop100Data = async () => {
            try {
                const response = await axios.get(`/api/v1/cryptocurrency/listings/latest`, {
                    params: {
                        limit: 100,
                    }
                });

                const ids = response.data.data.map(currency => currency.id).join(',');
                const infoResponse = await axios.get(`/api/v2/cryptocurrency/info`, {
                    params: {
                        id: ids,
                    }
                });

                const top100WithDetails = response.data.data.map(currency => {
                    const infoData = infoResponse.data.data[currency.id];
                    return {
                        ...currency,
                        logo: infoData.logo,
                        chart: `https://s3.coinmarketcap.com/generated/sparklines/web/7d/usd/${currency.id}.png`,
                    };
                });

                setTop100Data(top100WithDetails);
            } catch (error) {
                console.error("Error fetching top 100 data", error);
                setError("Failed to fetch top 100 data. Please try again later.");
            }
        };

        fetchTop100Data();
    }, []);

    if (error) {
        return <div className='Top100-page'>{error}</div>;
    }

    const handleCardClick = (id) => {
        navigate(`/home?id=${id}`);
    };

    return (
        <div className='Top100-page'>
            <div className='header'>
                Top 100 Cryptocurrencies
            </div>
            <div className='body'>
                <div className='top100-list'>
                    {top100Data.map(currency => (
                        <div key={currency.id} className='currency-card' onClick={() => handleCardClick(currency.id)}>
                            <div className='currency-header'>
                                <div className='currency-name'>{currency.name}</div>
                                <div
                                    className={`currency-price-change ${currency.quote.USD.percent_change_24h >= 0 ? 'positive' : 'negative'}`}>
                                    <div className='currency-price'>
                                        ${currency.quote.USD.price.toFixed(2)}
                                    </div>
                                    <div className='currency-change'>
                                        {currency.quote.USD.percent_change_24h.toFixed(2)}%
                                    </div>
                                </div>
                                <div className='currency-symbol'>
                                    <img src={currency.logo} alt={``}/>
                                </div>
                            </div>
                            <img src={currency.chart} alt={``}
                                 className={`currency-chart ${currency.quote.USD.percent_change_24h >= 0 ? 'positive' : 'negative'}`}/>
                            <button className='favorite-button' onClick={(e) => e.stopPropagation()}>Favorite</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Top100;
