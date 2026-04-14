export const getTerminology = (settings) => {
    const defaultTerms = {
        card: 'Card',
        cards: 'Cards',
        list: 'List',
        lists: 'Lists',
        board: 'Board',
        boards: 'Boards',
        label: 'Label',
        labels: 'Labels'
    };
    
    const naming = settings?.naming || {};
    return {
        card: naming.card || defaultTerms.card,
        cards: naming.card ? `${naming.card}s` : defaultTerms.cards,
        list: naming.list || defaultTerms.list,
        lists: naming.list ? `${naming.list}s` : defaultTerms.lists,
        board: naming.board || defaultTerms.board,
        boards: naming.board ? `${naming.board}s` : defaultTerms.boards,
        label: naming.label || defaultTerms.label,
        labels: naming.label ? `${naming.label}s` : defaultTerms.labels
    };
};
