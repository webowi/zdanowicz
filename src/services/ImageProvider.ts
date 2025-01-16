export const getImageUrl = (imagePath: string) => {
  return `${import.meta.env.VITE_SERVER_NAME}/${imagePath}`;
};
