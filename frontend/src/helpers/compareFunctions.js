export default {
  date: (a, b) => {
    const aDateTime = a.createdAt.getTime();
    const bDateTime = b.createdAt.getTime();

    return aDateTime - bDateTime;
  },
  alphabetic: (a, b) => {
    if (a.name > b.name) return 1;
    if (b.name > a.name) return -1;
    return 0;
  },
  status: (a, b) => {
    const statusWeight = {
      pendente: 1,
      'em andamento': 2,
      pronto: 3,
    };

    return statusWeight[a.status] - statusWeight[b.status];
  },
};
