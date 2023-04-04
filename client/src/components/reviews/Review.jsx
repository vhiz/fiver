import "./review.scss";

export default function Review() {
  return (
    <div className="review">
      <div className="user">
        <img
          className="pp"
          src="https://fiverr-res.cloudinary.com/image/upload/c_limit,f_auto,q_auto,t_smartwm,w_500/v1/attachments/delivery/asset/8d167728bd1b0dca520a402211685376-1664366980/1.png"
          alt=""
        />
        <div className="info">
          <span>Vhiz</span>
          <div className="country">
            <img
              src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ea-1f1f8.png"
              alt=""
            />
            <span>Spain</span>
          </div>
        </div>
      </div>
      <div className="stars">
        <img src="/icon/star.png" alt="" />
        <img src="/icon/star.png" alt="" />
        <img src="/icon/star.png" alt="" />
        <img src="/icon/star.png" alt="" />
        <span>4</span>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta commodi
        expedita illo neque. Harum autem voluptas minus quos sapiente sunt.
        Maxime quod facilis expedita id aspernatur nostrum voluptatem beatae
        cupiditate?
      </p>
      <div className="helpful">
        <span>Helpful?</span>
        <img src="/icon/thumbup.png" alt="" />
        <span>Yes</span>
        <img src="/icon/thumbdown.png" alt="" />
        <span>No</span>
      </div>
    </div>
  );
}
