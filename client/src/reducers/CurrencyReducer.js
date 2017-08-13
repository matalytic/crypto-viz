export default function(state = [], action) {
  switch(action.type) {
    case 'FETCH_CURRENCY':
    console.log('payload ', action.payload);
      return [action.payload.data, ...state];
    }
  return state;
}


// Shape of data
// {
//     "RAW": {
//         "ETH": {
//             "USD": {
//                 "TYPE": "5",
//                 "MARKET": "CCCAGG",
//                 "FROMSYMBOL": "ETH",
//                 "TOSYMBOL": "USD",
//                 "FLAGS": "4",
//                 "PRICE": 295.97,
//                 "LASTUPDATE": 1502643331,
//                 "LASTVOLUME": 5,
//                 "LASTVOLUMETO": 1478.0500000000002,
//                 "LASTTRADEID": 1334103128,
//                 "VOLUME24HOUR": 797402.6386742513,
//                 "VOLUME24HOURTO": 239264435.2420638,
//                 "OPEN24HOUR": 315.23,
//                 "HIGH24HOUR": 317.2,
//                 "LOW24HOUR": 285.98,
//                 "LASTMARKET": "Gemini",
//                 "CHANGE24HOUR": -19.25999999999999,
//                 "CHANGEPCT24HOUR": -6.109824572534337,
//                 "SUPPLY": 93971820.1866,
//                 "MKTCAP": 27812839620.628006
//             }
//         }
//     },
//     "DISPLAY": {
//         "ETH": {
//             "USD": {
//                 "FROMSYMBOL": "Ξ",
//                 "TOSYMBOL": "$",
//                 "MARKET": "CryptoCompare Index",
//                 "PRICE": "$ 295.97",
//                 "LASTUPDATE": "Just now",
//                 "LASTVOLUME": "Ξ 5",
//                 "LASTVOLUMETO": "$ 1,478.05",
//                 "LASTTRADEID": 1334103128,
//                 "VOLUME24HOUR": "Ξ 797,402.6",
//                 "VOLUME24HOURTO": "$ 239,264,435.2",
//                 "OPEN24HOUR": "$ 315.23",
//                 "HIGH24HOUR": "$ 317.2",
//                 "LOW24HOUR": "$ 285.98",
//                 "LASTMARKET": "Gemini",
//                 "CHANGE24HOUR": "$ -19.26",
//                 "CHANGEPCT24HOUR": "-6.11",
//                 "SUPPLY": "Ξ 93,971,820.2",
//                 "MKTCAP": "$ 27.81 B"
//             }
//         }
//     }
// }