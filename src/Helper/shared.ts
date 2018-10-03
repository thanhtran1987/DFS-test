export const isLoadMore = (data: any, count: number, size: number): boolean => {
  if (data && data.length >= count * size) {
    return false;
  }
  return true;
};
