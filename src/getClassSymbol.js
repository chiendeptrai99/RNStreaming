export const getSymbolClass = ({classSymbol = 'EQT'}) => {
  switch (classSymbol) {
    case 'EQT':
      return {
        text: 'EQT',
        color: '#2053DA',
      };
    case 'MF':
      return {
        text: 'MF',
        color: '#A41D2D',
      };
    case 'ETF':
      return {
        text: 'ETF',
        color: '#8000C9',
      };
    case 'WAR':
      return {
        text: 'WAR',
        color: '#E5CA0C',
      };
    case 'FUT':
      return {
        text: 'FUT',
        color: '#40D7D6',
      };
    case 'OPT':
      return {
        text: 'OPT',
        color: '#A0DF2D',
      };;
    case 'IND':
      return {
        text: 'IND',
        color: '#F04D08',
      };
    case 'FX':
      return {
        text: 'FX',
        color: '#5ED007',
      };
    default:
      return {
        text: '',
        color: '',
      };
  }
};
