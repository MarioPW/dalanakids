export const PriceFormatter = ({ children }) => {
    const formatNumber = (num) => {
      return new Intl.NumberFormat('es-ES', { 
        minimumFractionDigits: 0 
      }).format(num);
    };
  
    return <span>{formatNumber(children)}</span>;
  };