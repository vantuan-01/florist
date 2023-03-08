import * as httpRequest from '~/utils/httpRequest';

import { setItems } from '~/reducers/Products';
import { setPaginatePath } from '~/reducers/Pagination';

export const fetchProductsApi = () => async (dispatch, getState) => {
    const sortPath = getState().productReducer.sortPath;
    const filter = getState().paginateReducer.filter;
    try {
        httpRequest
            .get(
                `/product/products?_sort=${sortPath._sort}&_order=${sortPath._order}&_page=${filter._page}&_limit=${filter._limit}`,
            )
            .then((res) => {
                dispatch(setItems(res.data));
                dispatch(setPaginatePath(res.pagination));
            });
    } catch (error) {
        console.log(error.message);
    }
};
