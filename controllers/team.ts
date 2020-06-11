export const getTeam = ({ response }: { response: any }) => {
  console.log(`hi`);
  response.status = 200;
  response.body = {
    success: true,
  };
};
