import "./featured.scss";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="featuredhotel room" className="featuredImg"
        />
        <div className="featuredTitles">
          <h2>Abuja</h2>
          <h3>No. 40 Wuse road, Abuja</h3>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://media.istockphoto.com/photos/rendering-clean-and-tidy-modern-living-room-design-entrance-with-shoe-picture-id1215979766?k=20&m=1215979766&s=612x612&w=0&h=vVpLvdWtxfNFAPReUyuGpEarWXj99yQet-mM3CvSUWk="
          alt="featuredhotel room" className="featuredImg"
        />
        <div className="featuredTitles">
          <h2>Delta</h2>
          <h3>No. 6 Awakpor way, Airport road. Warri.</h3>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://media.istockphoto.com/photos/modern-living-room-picture-id482078224?k=20&m=482078224&s=612x612&w=0&h=db7imijDyu6HHqpG0nUUF2Wx-2BWs71JgfhKcMH7Gvc="
          alt="featuredhotel room" className="featuredImg"
        />
        <div className="featuredTitles">
          <h2>Lagos</h2>
          <h3>No 30 Ocean view Estate, Badagry</h3>
        </div>
      </div>
    </div>
  );
};

export default Featured;
