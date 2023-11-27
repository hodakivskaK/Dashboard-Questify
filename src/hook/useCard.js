import { useSelector } from 'react-redux';
import cardSelector from '../redux/cards/cardsSelector';

export const useCard = () => {
  const getCards = useSelector(cardSelector.getCards);

  return {
    getCards
  };
};