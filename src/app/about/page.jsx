'use client'
import Link from "next/link";
import Seo from "@/components/Seo";
import Footer from '@/components/Footer';
import Block from "@/components/Block";
import Team from "@/components/Team";

const About = () => {
    const features = [{text: "Amazing communication."}, {text: "Best trending designing experience."}, {text: "Email & Live chat."},];

    const starRating = Array(5)
        .fill()
        .map((_, index) => (<li key={index}>
            <i className="fa-solid fa-star"/>
        </li>));

    return (<>
        <Seo pageTitle="About Us V1"/>
        <div className="fancy-feature-fiftyOne position-relative mt-200">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7" data-aos="fade-right">
                        <div className="title-style-five mb-65 md-mb-40">
                            <div className="sc-title-two fst-italic position-relative">
                                More about us.
                            </div>
                            <h2 className="main-title fw-500 tx-dark">
                                We’re Selasar Kampus!
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-8 col-lg-9 ms-auto">
                        <div className="ps-xxl-5" data-aos="fade-left">
                            <h6 className="mb-30">Our History &amp; Goal.</h6>
                            <p className="text-lg tx-dark">
                                Selasar Kampus adalah platform edukasi yang berfokus pada pengembangan keterampilan
                                dan pengetahuan bagi mahasiswa dan profesional muda di Indonesia. Kami percaya bahwa
                                setiap individu memiliki potensi besar yang dapat dikembangkan melalui pembelajaran
                                yang efektif dan inovatif.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="fancy-feature-thirtySeven mt-225 lg-mt-120">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div
                            className="block-style-four pe-xxl-5 me-xxl-4 md-mb-70"
                            data-aos="fade-right"
                        >
                            <div className="title-style-six">
                                <div className="sc-title-two text-uppercase">WHY US</div>
                                <h2 className="main-title fw-500 tx-dark fw-bold">
                                    Why selasar kampus is your best choice?
                                </h2>
                            </div>
                            <p className="fs-20 pt-20 pb-30 lg-pt-10 lg-pb-20">
                                Kami menggandeng para ahli di bidangnya untuk membuat konten yang berkualitas dan
                                disesuaikan dengan kebutuhan pengguna.

                                Selasar Kampus juga bekerja sama dengan perusahaan dan institusi pendidikan untuk
                                menyediakan program-program khusus yang dapat membantu mahasiswa dan profesional
                                muda untuk meningkatkan keterampilan mereka dan mempersiapkan diri untuk masa depan
                                yang lebih baik.
                            </p>
                        </div>
                    </div>
                    <div className="col-xxl-5 col-lg-6 ms-auto">
                        <Block/>
                    </div>
                </div>
            </div>
        </div>
        <div className="team-section-two position-relative pt-200 lg-pt-120">
            <div className="container">
                <div className="wrapper position-relative">
                    <div className="row align-items-center">
                        <div className="col-lg-5" data-aos="fade-right">
                            <div className="title-style-six text-center text-lg-start pb-40 lg-pb-20 md-pb-10">
                                <h2 className="main-title fw-500 tx-dark">Our Team</h2>
                            </div>
                        </div>
                    </div>


                    <div className="row">
                        <Team/>
                    </div>
                </div>
            </div>
            <img
                src="/images/shape/shape_172.svg"
                alt="shape"
                className="lazy-img shapes shape-one d-none d-xl-inline-block"
            />
        </div>
        <div
            className="fancy-short-banner-sixteen mt-130 mb-130 lg-mt-80"
            data-aos="fade-up"
        >
            <div className="container">
                <div className="bg-wrapper pt-65 pb-65 lg-pt-40 lg-pb-40">
                    <div className="row">
                        <div className="col-xl-10 col-md-11 m-auto">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="text-wrapper text-center text-lg-start md-pb-30">
                                        <div className="sc-title fs-18 pb-10">
                                            Interested in us?
                                        </div>
                                        <h2 className="main-title fw-500 text-white m0">
                                            Feel free to reach out to us.
                                        </h2>
                                    </div>
                                </div>
                                <div className="col-lg-5 ms-auto text-center text-lg-end">
                                    <Link
                                        href="https://www.youtube.com/@SelasarKampus"
                                        className="btn-twentyOne fw-500 tran3s"
                                    >
                                        Find out more
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
};

export default About;
