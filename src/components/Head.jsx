import HeadCSS from "./Head.module.css";

document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const anchor = document.querySelectorAll(".eye");

  const rekt = anchor[0]?.getBoundingClientRect();
  const anchorX = rekt.left + rekt.width / 2;
  const anchorY = rekt.top + rekt.height / 2;

  const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);

  const eyes = document.querySelectorAll(".eye");
  eyes.forEach((eye) => {
    eye.style.transform = `rotate(${130 + angleDeg}deg)`;
  });
});

const angle = (cx, cy, ex, ey) => {
  const dy = ey - cy;
  const dx = ex - cx;
  const rad = Math.atan2(dy, dx);
  const deg = (rad * 180) / Math.PI;

  return deg;
};

const Head = () => {
  return (
    <div className={`${HeadCSS.container}`}>
      <div className={`${HeadCSS.head}`}>
        <div className={`${HeadCSS.top_hair}`}></div>
        <div className={`${HeadCSS.top_hair2}`}></div>
        <div className={`${HeadCSS.top_hair3}`}></div>
        <div className={`${HeadCSS.top_hair4}`}></div>
        <div className={`${HeadCSS.top_hair5}`}></div>
        <div className={`${HeadCSS.top_hair6}`}></div>
        <div className={`${HeadCSS.top_hair7}`}></div>
        <div className={`${HeadCSS.top_hair8}`}></div>
        <div className={`${HeadCSS.top_hair9}`}></div>
        <div className={`${HeadCSS.top_hair10}`}></div>
        <div className={`${HeadCSS.top_hair11}`}></div>
        <div className={`${HeadCSS.top_hair12}`}></div>
        <div className={`${HeadCSS.top_hair13}`}></div>
        <div className={`${HeadCSS.top_hair14}`}></div>
        <div className={`${HeadCSS.top_hair15}`}></div>
        <div className={`${HeadCSS.top_hair16}`}></div>
        <div className={`${HeadCSS.ear_left}`}></div>
        <div className={`${HeadCSS.ear_right}`}></div>
        <div className={`${HeadCSS.eye_left} eye`}>
          <div className={`${HeadCSS.eye_left_inner} eye`}></div>
        </div>
        <div className={`${HeadCSS.eye_right} eye`}>
          <div className={`${HeadCSS.eye_right_inner} eye`}></div>
        </div>
        <div className={`${HeadCSS.nose}`}></div>
        <div className={`${HeadCSS.nose_left}`}></div>
        <div className={`${HeadCSS.nose_right}`}></div>

        <div className={`${HeadCSS.eyebrow_left}`}></div>
        <div className={`${HeadCSS.eyebrow_right}`}></div>

        <div className={`${HeadCSS.mustache_left}`}></div>
        <div className={`${HeadCSS.mustache_right}`}></div>

        <div className={`${HeadCSS.lip}`}></div>

        <div className={`${HeadCSS.beard}`}></div>
      </div>
    </div>
  );
};

export default Head;
