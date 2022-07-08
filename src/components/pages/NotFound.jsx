import { Link } from "react-router-dom";

const NotFound = () => {
    return(<>
    <section className="not-found">
        <div className="container align-items-center justify-content-center">
        <h1>404</h1>
        <h3>متاسفانه صفحه مورد نظر شما یافت نشد</h3>
        <Link to="/" className="btn text-center">بازگشت به صفحه اصلی</Link>
        </div>
    </section>
    </>)
}

export default NotFound;