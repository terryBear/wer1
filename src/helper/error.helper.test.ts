import throwCustomError, { ErrorTypes } from './error.helper';

describe('error.helper', () => {
  it('should throw a GraphQLError with the correct error message and extensions', () => {
    const errorMessage = 'Invalid input';
    const errorType = ErrorTypes.BAD_USER_INPUT;

    try {
      throwCustomError(errorMessage, errorType);
    } catch (error: any) {
      expect(error.message).toBe(errorMessage);
      expect(error.extensions).toEqual({
        code: errorType.errorCode,
        http: {
          status: errorType.errorStatus,
        },
      });
    }
  });
});