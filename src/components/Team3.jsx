'use client'

import Image from "next/image";

const teamMembers = [
  {
    id: 1,
    name: "Farih Muwaffaq",
    role: "CEO / CTO",
    imgSrc: "/images/team/farih.png",
  },
  {
    id: 2,
    name: "Satrio Sahasraya",
    role: "COO",
    imgSrc: "/images/team/satrio.png",
  },
  {
    id: 3,
    name: "Tasya Yunita",
    role: "CFO",
    imgSrc: "/images/team/tasya.png",
  },
  {
    id: 4,
    name: "Kartika Zahirah E",
    role: "CMO",
    imgSrc: "/images/team/kartika.png",
  },
];

const Team3 = () => {
  return (
    <>
      {teamMembers.map((member) => (
        <div
          key={member.id}
          className="col-lg-3 col-sm-6"
          data-aos="fade-up"
          data-aos-delay={`${member.id * 100}`}
        >
          <div className="team-block-two mt-40">
            <div className="img-meta position-relative">
              <Image
                width={150}
                height={300}
                src={member.imgSrc}
                alt={member.name}
                className="lazy-img team-img w-100"
              />
              <div className="info text-center">
                <h5 className="tx-dark fs-20 mb-5">{member.name}</h5>
                <div className="tx-dark opacity-75">{member.role}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Team3;
