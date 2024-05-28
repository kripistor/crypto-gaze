import './Wallets.scss'

function Wallets() {

    const AvailableCurrencies = [
        {
            name: 'Bitcoin',
            amount: 5248
        },
        {
            name: 'Etherium',
            amount: 2248
        },
        {
            name: 'Litecoin',
            amount: 1248
        }
    ]
    const Transactions = [
        {
            date: '27.05.2024 12:12',
            type: 'receive',
            object: 'Elon Musk',
            amount: 0.012,
            currency: 'USD'
        },
        {
            date: '26.05.2024 12:12',
            type: 'send',
            object: 'Elon Musk',
            amount: 0.012,
            currency: 'USD'
        },
        {
            date: '26.05.2024 10:12',
            type: 'receive',
            object: 'Unknown',
            amount: 0.012,
            currency: 'USD'
        },
        {
            date: '25.05.2024 16:15',
            type: 'send',
            object: 'Unknown',
            amount: 0.012,
            currency: 'USD'
        }
    ]

    const TotalAmount = AvailableCurrencies.reduce((acc, currency) => acc + currency.amount, 0)

    return (
        <div className='Wallets-page'>
            <div className='header'>
                To be implemented
            </div>
            <div className='body'>
            </div>
        </div>
    );
}

export default Wallets;