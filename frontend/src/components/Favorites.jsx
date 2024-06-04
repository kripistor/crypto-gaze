import React, {useEffect, useState} from "react";
import "./Favorites.scss";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Favorites() {
    const [favoritesData, setFavoritesData] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const [dots, setDots] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const favorites = [
        {name: 'Bitcoin', id: '1'},
        {name: 'Ethereum', id: '1027'},
        {name: 'Litecoin', id: '2'},
    ];

    useEffect(() => {
        const fetchFavoritesData = async () => {
            try {
                const ids = favorites.map(currency => currency.id).join(',');
                const response = await axios.get(`/api/v1/cryptocurrency/quotes/latest`, {
                    params: {
                        id: ids,
                        convert: 'USD',
                    }
                });

                const infoResponse = await axios.get(`/api/v2/cryptocurrency/info`, {
                    params: {
                        id: ids,
                    }
                });

                const responses = favorites.map((currency) => {
                    const coinData = response.data.data[currency.id];
                    const infoData = infoResponse.data.data[currency.id];
                    return {
                        ...currency,
                        logo: infoData.logo,
                        price: coinData.quote.USD.price,
                        priceChange: coinData.quote.USD.percent_change_24h,
                        chart: `https://s3.coinmarketcap.com/generated/sparklines/web/7d/usd/${coinData.id}.png`,
                    };
                });

                setFavoritesData(responses);
            } catch (error) {
                console.error("Error fetching data", error);
                setError("Failed to fetch data. Please try again later.");
            }
            setIsLoading(false);
        };

        fetchFavoritesData();
    }, []);

    if (error) {
        return <div className='Favorites-page'>{error}</div>;
    }

    function handleCardClick(id) {
        navigate(`/home?id=${id}`);
    }

    useEffect(() => {
        let timer;
        if (isLoading) {
            timer = setInterval(() => {
                setDots(prevDots => {
                    if (prevDots.length < 3) {
                        return prevDots + '.';
                    } else {
                        return '';
                    }
                });
            }, 1000);
        } else {
            setDots('');
        }

        return () => clearInterval(timer);
    }, [isLoading]);

    return (
        <div className='Favorites-page'>
            <div className='header'>
                Favorites
            </div>
            <div className='body'>
                {isLoading ? <div className='loading'>Loading favorites{dots}</div> :
                <div className='favorites-list'>
                    {favoritesData.map((currency) =>
                        <div key={currency.id} className='currency-card' onClick={() => handleCardClick(currency.id)}>
                            <div className='currency-header'>
                                <div className='currency-name'>
                                    {currency.name}
                                </div>
                                <div
                                    className={`currency-price-change ${currency.priceChange >= 0 ? 'positive' : 'negative'}`}>
                                    <div className='currency-price'>
                                        ${currency.price.toFixed(2)}
                                    </div>
                                    <div
                                        className={`currency-change`}>
                                        {currency.priceChange.toFixed(2)}%
                                    </div>
                                </div>
                                <div className='currency-symbol'>
                                    <img src={currency.logo} alt={``}/>
                                </div>
                            </div>
                            <img src={currency.chart} alt={``}
                                 className={`currency-chart ${currency.priceChange >= 0 ? 'positive' : 'negative'}`}/>
                            <button className='unfavorite-button' onClick={(e) => e.stopPropagation()}>Unfavorite</button>
                        </div>
                    )}
                </div>}
            </div>
        </div>
    );
}

export default Favorites;
