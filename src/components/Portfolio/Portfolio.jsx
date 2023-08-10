import portfolioData from "../../data.json";
import "./Portfolio.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, A11y, Autoplay } from "swiper/modules";
import "swiper/css";

const Portfolio = () => {
  const redirectHandler = (link) => {
    window.open(link, "_blank");
  };

  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="projects">
        <Swiper
          modules={[A11y, EffectCoverflow, Autoplay]}
          spaceBetween={50}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          effect="coverflow"
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          breakpoints={{
            576: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {portfolioData.projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="project">
                <div className="project_img">
                  <img src={project.imgUrl} alt={project.title} />
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <span>{project.technologies.join(" | ")}</span>
                <div className="project_buttons">
                  <button onClick={() => redirectHandler(project.githubLink)}>
                    Github
                  </button>
                  <button onClick={() => redirectHandler(project.websiteLink)}>
                    Visit Website
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Portfolio;
