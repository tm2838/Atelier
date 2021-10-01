import changeSku from './selectedSku';
import changeQty from './selectedQty';
import changeQtyInStock from './inStockQty';

const resetSelected = () => (dispatch) => {
  dispatch(changeSku(null));
  dispatch(changeQty(0));
  dispatch(changeQtyInStock([]));
};

export default resetSelected;
