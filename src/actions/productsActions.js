import * as allActions from './allActions';

export const receiveProducts = (data) => ({ 
    type: allActions.RECEIVE_PRODUCTS,
    products: data
});

export function fetchProducts() { 
    return (dispatch) => {
        fetch('api/products.json')
            .then(response =>
                response.json().then(data => ({
                    data: data.data,
                    status: response.status
                }))
            )
            .then(response => {
                if (response.status === 200) {
                    dispatch(receiveProducts(response.data))
      } 
            })
            .catch((error) => {
                const response = error.response;
                if (response === undefined) {
                    dispatch(fetchFailure(error));
                } else {
                    error.status = response.status;
                    error.statusText = response.statusText;
                    response.text().then((text) => {
                        try {
                            const json = JSON.parse(text);
                            error.message = json.message;
                        } catch (ex) {
                            error.message = text;
                        }
                        dispatch(fetchFailure(error));
                    });
                }
            });
    };
}

export const fetchFailure = (error) => ({
    type: allActions.FAILED_RECIEVE_CATEGORIES,
    error,
})
