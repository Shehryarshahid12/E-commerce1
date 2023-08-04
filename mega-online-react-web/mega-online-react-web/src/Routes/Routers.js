import { Route, Routes } from "react-router-dom"
import Cart from "../Containers/Cart/Cart"
import Home from "../Containers/Home/Home"
import Login from "../Containers/Auth/Login/Login"
import SignUp from "../Containers/Auth/SignUp/SignUp"
import ConfirmPhone from "../Containers/Auth/SignUp/ConfirmPhone"
import EnterCode from "../Containers/Auth/SignUp/EnterCode"
import ProductDetail from "../Containers/ProductDetail/ProductDetail"
import Payment from "../Containers/Cart/Payment"
import SearchResultPage from "../Containers/SearchResultPage/SearchResultPage"
import PurchaseSuccessPage from "../Containers/Cart/PurchaseSuccessPage"

const Routers = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/confirm-phone" element={<ConfirmPhone/>}/>
        <Route path="/enter-code" element={<EnterCode/>}/>
        <Route path="/product-detail" element={<ProductDetail/>}/>
        <Route path="/search-result" element={<SearchResultPage/>}/>
        <Route path="/cartpayment" element={<Payment/>}/>
        <Route path="/PurchaseSuccess" element={<PurchaseSuccessPage/>}/>
    </Routes>
  )
}

export default Routers