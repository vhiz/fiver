import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import Review from "../../components/reviews/Review";
import "./gig.scss";
import { Slider } from "infinite-react-carousel";
export default function Gig() {
  const settings = {
    slidesToShow: 1,
    arrowsScroll: 1,
  };
  return (
    <div className="gig">
      <div className="contanier">
        <div className="left">
          <Breadcrumbs />
          <h1>
            I will give you consultancy for generative art projects in
            midjourney stable diffusion
          </h1>
          <div className="user">
            <img
              className="pp"
              src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/5790ebe11c41ed6c4014c2716c597fc8-1612732763342/02eec240-a363-487d-bcb6-2d03f4f88c87.png"
              alt=""
            />
            <span>pablopietro</span>
            <div className="stars">
              <img src="/icon/star.png" alt="" />
              <img src="/icon/star.png" alt="" />
              <img src="/icon/star.png" alt="" />
              <img src="/icon/star.png" alt="" />
              <span>4</span>
            </div>
          </div>
          <Slider {...settings} className="slider">
            <img
              src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/273679055/original/34c948d58d10e5ca79a779a03372f7b69de1793b/advise-and-create-amazing-and-unique-art-through-midjourney.png"
              alt=""
            />
            <img
              src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/273679055/original/7df3b3029ee84e56433e28eac5c1441791339019/advise-and-create-amazing-and-unique-art-through-midjourney.jpg"
              alt=""
            />
            <img
              src="https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/2e82e35d1e5f09cc8d59ebec2f08a9f1-1680180886/00066/advise-and-create-amazing-and-unique-art-through-midjourney.png"
              alt=""
            />
          </Slider>
          <h2>About this gig</h2>
          <p>
            Why you should choose me? We are a team of AI designers, digital
            creatives and developers with more than 25 years of experience. We
            have created more than 300,000 images in midjourney, stable
            diffusion and dalle2. We know how it works and how to get the
            maximum potential through advanced use of words, styles, parameters
            and model training. What will you get in this Gig? Consulting to
            define the needs of the project and evaluate its viability.
            Definition of possible strategies or approaches to achieve the
            requested results. Testing of the proposed strategies with image
            generation. Generation, if needed we can generate a large volume of
            images with the winning strategy. How it works? Basic Package: we
            make a call to know the project and the buyer's expectations, then
            we make an analysis and evaluate the viability of the project, if
            the project is viable we will propose different approaches to
            achieve the desired result. Standard: Basic + we will work on the
            different approaches proposed to develop the idea and present test
            results. Premium: Basic + Standard + We will begin to develop the
            winning concept. Let's think, let's dream and let's make it happen.
          </p>
          <div className="seller">
            <h2>About the seller</h2>
            <div className="user">
              <img
                src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/5790ebe11c41ed6c4014c2716c597fc8-1612732763342/02eec240-a363-487d-bcb6-2d03f4f88c87.png"
                alt=""
              />
              <div className="info">
                <span>pablopietro</span>
                <div className="stars">
                  <img src="/icon/star.png" alt="" />
                  <img src="/icon/star.png" alt="" />
                  <img src="/icon/star.png" alt="" />
                  <img src="/icon/star.png" alt="" />
                  <span>4</span>
                </div>
                <button>Contact me</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span>From</span>
                  <span>Spain</span>
                </div>
                <div className="item">
                  <span>Avg. response time</span>
                  <span>4 hours</span>
                </div>
                <div className="item">
                  <span>Languages</span>
                  <span>English, Spanish</span>
                </div>
                <div className="item">
                  <span>Member since</span>
                  <span>Feb 2021</span>
                </div>
                <div className="item">
                  <span>Last delivery</span>
                  <span>3 days</span>
                </div>
              </div>
              <hr />
              <p>
                I am a computer engineer and graphic designer. I do all kind of
                tasks related to IT and digital design creation. Currently
                specializing in art created through digital intelligence and
                computer.
              </p>
            </div>
          </div>
          <div className="reviews">
            <h2>Reviews</h2>
            <Review />
            <Review />
            <Review />
            <Review />
            <Review />
            <Review />
            <Review />
            <Review />
            <Review />
            <Review />
          </div>
        </div>
        <div className="right">
          <div className="price">
            <h3>Painting in any style</h3>
            <h2>50.00</h2>
          </div>
          <p>
            Anything - portrait, full-body painting, B&W or colored, stylized or
            realistic + PSD
          </p>
          <div className="details">
            <div className="item">
              <img src="/icon/clock.png" alt="" />
              <span>14 Days Delivery</span>
            </div>
            <div className="item">
              <img src="/icon/sync.png" alt="" />
              <span>3 Revisions</span>
            </div>
          </div>
          <div className="components">
            <div className="item">
              <img src="/icon/mark.png" alt="" />
              <span>1 figure</span>
            </div>
            <div className="item">
              <img src="/icon/mark.png" alt="" />
              <span>Include source file</span>
            </div>
            <div className="item">
              <img src="/icon/mark.png" alt="" />
              <span>Printable resolution file</span>
            </div>
            <div className="item">
              <img src="/icon/mark.png" alt="" />
              <span>Include colors in illustration</span>
            </div>
            <div className="item">
              <img src="/icon/mark.png" alt="" />
              <span>Include entire body illustration</span>
            </div>
            <div className="item">
              <img src="/icon/mark.png" alt="" />
              <span>Commercial use</span>
            </div>
          </div>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}
