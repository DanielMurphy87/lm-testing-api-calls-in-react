import { FETCH_ERROR_418, FETCH_ERROR_500 } from "../definitions/fetch_errors";

export const outputFetchResult = <T>(
    status: number | undefined,
    error: string,
    data: T | undefined,
    displayData: (data: T) => React.ReactNode
) => {
    if (error) return error;

    if (status === 500) {
        return FETCH_ERROR_500;
    } else if (status === 418) {
        return FETCH_ERROR_418;
    } else if (status === 200) {
        return data !== undefined ? displayData(data) : "No data returned";
    }

    return "Unknown status code";
};