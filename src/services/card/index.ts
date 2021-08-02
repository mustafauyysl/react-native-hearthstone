import ax from '../axios';

// Get All Cards
const getAllCards = () => ax.get(`/cards`);

// Search Cars
const searchCard = (text: string) => ax.get(`/cards/search/${text}`);

export { getAllCards, searchCard };
