import OrderList from '../components/OrderList';
import PleaseSignIn from '../components/PleaseSignin';

const OrderPage = props => (
    <div>
       <PleaseSignIn>
        <OrderList />
        </PleaseSignIn>   
    </div>
);
export default OrderPage;