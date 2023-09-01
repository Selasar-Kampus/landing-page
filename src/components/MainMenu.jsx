'use client'
import Link from "next/link";

const MainMenu = () => {
    return (
        <nav className="navbar navbar-expand-lg order-lg-2">
            <button
                className="navbar-toggler d-block d-lg-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span/>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="d-block d-lg-none">
                        <div className="logo">
                            <Link href="/" className="d-block">
                                <img src="/images/logo/img.png" alt="" width={95}/>
                            </Link>
                        </div>
                    </li>
                    <li className="nav-item active">
                        <a
                            className="nav-link"
                            href="/"
                            role="button"
                            data-bs-auto-close="outside"
                            aria-expanded="false"
                        >
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            href="/about"
                            role="button"
                            data-bs-auto-close="outside"
                            aria-expanded="false"
                        >
                            About
                        </a>
                    </li>
                </ul>
                <div className="mobile-content d-block d-lg-none">
                    <div className="d-flex flex-column align-items-center justify-content-center mt-70">
                        <Link href="/src/pages/contact" className="btn-twentyOne fw-500 tran3s">
                            StudyBox (Coming Soon)
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default MainMenu;
