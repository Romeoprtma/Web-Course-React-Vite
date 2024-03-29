import ProductCard from "./components/ProductCard";
import Typography from "./components/Typography";
import "./style.css";

function App() {
  const courses = [
    {
      courseType: "Intensive Bootcamp",
      courseName: "Programming vue JS",
      courseDescription: "(Getting started with React JS)",
      courseDetail: "Programing React Js",
      courseDetail2: "Getting started with React JS",
      courseDate: "Batch : September 2023",
      courseMentor: "Mentor  : Ardi Widyanto Saputra & Ade Armyatna Yusfantri",
      coursePrice: "Rp. 560.000",
    },
    {
      courseType: "Intensive Bootcamp",
      courseName: "Programming React JS",
      courseDescription: "(Getting started with React JS)",
      courseDetail: "Programing React Js",
      courseDetail2: "Getting started with React JS",
      courseDate: "Batch : September 2023",
      courseMentor: "Mentor  : Ardi Widyanto Saputra & Ade Armyatna Yusfantri",
      coursePrice: "Rp. 560.000",
    },
    {
      courseType: "Intensive Bootcamp",
      courseName: "Programming React JS",
      courseDescription: "(Getting started with React JS)",
      courseDetail: "Programing React Js",
      courseDetail2: "Getting started with React JS",
      courseDate: "Batch : September 2023",
      courseMentor: "Mentor  : Ardi Widyanto Saputra & Ade Armyatna Yusfantri",
      coursePrice: "Rp. 560.000",
    },
    {
      courseType: "Intensive Bootcamp",
      courseName: "Programming React JS",
      courseDescription: "(Getting started with React JS)",
      courseDetail: "Programing React Js",
      courseDetail2: "Getting started with React JS",
      courseDate: "Batch : September 2023",
      courseMentor: "Mentor  : Ardi Widyanto Saputra & Ade Armyatna Yusfantri",
      coursePrice: "Rp. 560.000",
    },
    {
      courseType: "Intensive Bootcamp",
      courseName: "Programming React JS",
      courseDescription: "(Getting started with React JS)",
      courseDetail: "Programing React Js",
      courseDetail2: "Getting started with React JS",
      courseDate: "Batch : September 2023",
      courseMentor: "Mentor  : Ardi Widyanto Saputra & Ade Armyatna Yusfantri",
      coursePrice: "Rp. 560.000",
    },
    {
      courseType: "Intensive Bootcamp",
      courseName: "Programming React JS",
      courseDescription: "(Getting started with React JS)",
      courseDetail: "Programing React Js",
      courseDetail2: "Getting started with React JS",
      courseDate: "Batch : September 2023",
      courseMentor: "Mentor  : Ardi Widyanto Saputra & Ade Armyatna Yusfantri",
      coursePrice: "Rp. 560.000",
    },
    {
      courseType: "Intensive Bootcamp",
      courseName: "Programming React JS",
      courseDescription: "(Getting started with React JS)",
      courseDetail: "Programing React Js",
      courseDetail2: "Getting started with React JS",
      courseDate: "Batch : September 2023",
      courseMentor: "Mentor  : Ardi Widyanto Saputra & Ade Armyatna Yusfantri",
      coursePrice: "Rp. 560.000",
    },
    {
      courseType: "Intensive Bootcamp",
      courseName: "Programming React JS",
      courseDescription: "(Getting started with React JS)",
      courseDetail: "Programing React Js",
      courseDetail2: "Getting started with React JS",
      courseDate: "Batch : September 2023",
      courseMentor: "Mentor  : Ardi Widyanto Saputra & Ade Armyatna Yusfantri",
      coursePrice: "Rp. 560.000",
    },
  ];

  const isShowFooter = true;

  const ShowFooter = (isShow) => {
    if (isShow) {
      return (
        <footer>
          <div className="flex d-flex">
            <div>
              <Typography weight={"normal2"} size="md" className="text-[#A3A3A3] text-left ml-[99px] mt-[171px] leading-[24px]">
                TAGLINE edspert disini
              </Typography>
              <Typography weight={"normal"} size="md" className="text-[#A3A3A3] text-left ml-[99px] mt-[20px] leading-[24px] w-[411px]">
                Jl. Watugede No.58, Wonorejo, Sariharjo, Kec. Ngaglik, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55581
              </Typography>
            </div>
            <div>
              <Typography weight={"normal2"} size="md" className="text-left ml-[149px] mt-[149px] mb-[18px] leading-[24px]">
                Program
              </Typography>
              <Typography weight={"normal"} size="md" className="text-[#A3A3A3] text-left ml-[149px] mt-[20px] mb-[18px] leading-[24px] mr-[119px]">
                Online Course
              </Typography>
              <Typography weight={"normal"} size="md" className="text-[#A3A3A3] text-left ml-[149px] mt-[20px] mb-[18px] leading-[24px] mr-[119px]">
                Mini Bootcamp
              </Typography>
              <Typography weight={"normal"} size="md" className="text-[#A3A3A3] text-left ml-[149px] mt-[20px] mb-[161px] leading-[24px] mr-[119px]">
                Bootcamp
              </Typography>
            </div>
            <div>
              <Typography weight={"normal2"} size="md" className="text-left mt-[149px] mb-[18px] leading-[24px]">
                Bidang Ilmu
              </Typography>
              <Typography weight={"normal"} size="md" className="text-[#A3A3A3] text-left mt-[20px] mb-[18px] leading-[24px] mr-[119px]">
                Digital marketing
              </Typography>
              <Typography weight={"normal"} size="md" className="text-[#A3A3A3] text-left mt-[20px] mb-[18px] leading-[24px] mr-[119px]">
                Product management
              </Typography>
              <Typography weight={"normal"} size="md" className="text-[#A3A3A3] text-left mt-[20px] mb-[18pxpx] leading-[24px] mr-[119px]">
                English
              </Typography>
              <Typography weight={"normal"} size="md" className="text-[#A3A3A3] text-left mt-[20px] mb-[161px] leading-[24px] mr-[119px]">
                Programming
              </Typography>
            </div>
            <div>
              <Typography weight={"normal2"} size="md" className="text-left mt-[149px] mb-[18px] leading-[24px]">
                Tentang Edspert
              </Typography>
              <Typography weight={"normal"} size="md" className="text-[#A3A3A3] text-left mt-[20px] mb-[18px] leading-[24px]">
                Bantuan
              </Typography>
              <Typography weight={"normal"} size="md" className="text-[#A3A3A3] text-left mt-[20px] mb-[18px] leading-[24px]">
                Kontak kami
              </Typography>
              <Typography weight={"normal"} size="md" className="text-[#A3A3A3] text-left mt-[20px] mb-[161px] leading-[24px]">
                Media Sosial
              </Typography>
            </div>
          </div>
          <Typography weight={"normal2"} size="md" className="text-[#A3A3A3] ml-[657px]">
            Copyright edspert. Romeo Mulia Pratama.
          </Typography>
        </footer>
      );
    }
    return <div>Hello World</div>;
  };

  return (
    <div>
      <header>
        <nav className="flex flex-row align-center">
          <Typography weight={"normal2"} size="lg" className="ml-[120px] mr-[500px] mt-[40px]">
            Logo
          </Typography>
          <ul className="flex">
            <li className="ml-[50px] mr-[54px] mt-[40px]">
              <a href="#">
                <Typography weight={"normal"} size="sm">
                  Program
                </Typography>
              </a>
            </li>
            <li className="mr-[54px] mt-[40px]">
              <a href="#">
                <Typography weight={"normal"} size="sm">
                  Bidang Ilmu
                </Typography>
              </a>
            </li>
            <li className="mr-[54px] mt-[40px]">
              <a href="#">
                <Typography weight={"normal"} size="sm">
                  Tentang Edspert
                </Typography>
              </a>
            </li>
            <button className="bg-[#FF6161] mt-[28px] rounded-[50px] gap-[10px] pt-[10px] pr-[24px] pb-[10px] pl-[24px] ">
              <Typography weight={"normal"} size="sm" className="leading-[20px]">
                Masuk/daftar
              </Typography>
            </button>
          </ul>
        </nav>
        <div className="flex flex-row">
          <div>
            <Typography weight={"normal"} size="xl" className="leading-[50px] ml-[120px] mt-[174px]">
              Jadi expert bersama <br />
              Edspert.Id
            </Typography>
            <Typography weight={"light"} size="md" className="leading-[24px]  ml-[120px] mt-[27px] mb-[235px]">
              Tingkatkan skill dan pengetahuan bersama para mentor terbaik di bidangnya, untuk siapkan karir impian anda.
            </Typography>
          </div>
          <div>
            <img className="w-[819px] h-[546px] mr-[330px] mt-[76px]" src={"/assets/person2.png"} />
          </div>
        </div>
      </header>

      <main className="grid-main">
        {courses.map((course) => (
          <ProductCard
            key={course.courseName}
            courseType={course.courseType}
            courseName={course.courseName}
            courseDescription={course.courseDescription}
            courseDetail={course.courseDetail}
            courseDetail2={course.courseDetail2}
            courseDate={course.courseDate}
            courseMentor={course.courseMentor}
            coursePrice={course.coursePrice}
          ></ProductCard>
        ))}
      </main>
      {/* Inline If */}
      {/* {isShowFooter && <footer>
        <p>&copy; 2023 HTML Javascript dan CSS</p>
      </footer>}  */}

      {/* Inline If Else*/}
      {/* {isShowFooter ? <footer>
        <p>&copy; 2023 HTML Javascript dan CSS</p>
      </footer> : <div>Hello World</div>} */}

      <ShowFooter isShow={isShowFooter} />
    </div>
  );
}

export default App;
