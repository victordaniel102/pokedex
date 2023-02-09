export const checkFullFilledPromiseAndReturnValue = (
  response: PromiseSettledResult<any>
) => (response.status == "fulfilled" ? response.value : null);
