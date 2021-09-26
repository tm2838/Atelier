export const sortHelpful = (reviews) => {
  const sorted = reviews.slice();
  sorted.sort((a, b) => b.helpfulness - a.helpfulness);
  return sorted;
};

export const sortNewest = (reviews) => {
  const sorted = reviews.slice();
  sorted.sort((a, b) => b.newest - a.newest);
  return sorted;
};

export const sortRelevant = (reviews) => {
  const sorted = reviews.slice();
  sorted.sort((a, b) => b.relevant - a.relevant);
  return sorted;
};
