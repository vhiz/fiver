import "./messagebox.scss";

export default function MessageBox({ own }) {
  return (
    <div className={own ? "messagebox own" : "messagebox"}>
      <img
        src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/8b60be1bf2915ddc1d551eaa252684d7-1589020928117/1d531e54-7607-4bdb-815f-088dbc0fb971.jpg"
        alt=""
      />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
        exercitationem, cupiditate temporibus autem sequi, obcaecati aliquid
        quasi quas quia eligendi tempora impedit fuga amet recusandae in
        nesciunt earum eos laborum?
      </p>
    </div>
  );
}
