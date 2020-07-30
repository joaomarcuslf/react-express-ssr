export const asyncAction = (resourceName = '', request) => {
  const statusRequest = `FETCH_${resourceName.toUpperCase()}_REQUEST`;
  const statusSuccess = `FETCH_${resourceName.toUpperCase()}_SUCCESS`;
  const statusFailure = `FETCH_${resourceName.toUpperCase()}_FAILURE`;

  function fetchRequest() {
    return { type: statusRequest };
  }

  function fetchSuccess(response) {
    return {
      type: statusSuccess,
      payload: response,
    };
  }

  function fetchError(error) {
    return {
      type: statusFailure,
      payload: error,
    };
  }

  function requestBuilder() {
    return function actionFlow(dispatch) {
      dispatch(fetchRequest());

      return request()
        .then((response) => dispatch(fetchSuccess(response)))
        .catch((err) => dispatch(fetchError(err)));
    };
  }

  requestBuilder.REQUEST_TYPE = statusRequest;
  requestBuilder.SUCCESS_TYPE = statusSuccess;
  requestBuilder.FAILURE_TYPE = statusFailure;

  return requestBuilder;
};
