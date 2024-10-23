import React from "react";
import SharePost from "./SharePost";
import Posts from "./Posts";
import image1 from "/post-images/1.jpg";
import image2 from "/post-images/2.jpg";
import image3 from "/post-images/3.jpg";
import image4 from "/post-images/4.jpg";
import image5 from "/post-images/5.jpg";
import image6 from "/post-images/6.jpg";
import image7 from "/post-images/7.jpg";
import image8 from "/post-images/8.jpg";
import friends1 from "/friends/friend-1.jpg";
import friends2 from "/friends/friend-2.jpg";
import friends3 from "/friends/friend-3.jpg";
import friends4 from "/friends/friend-4.jpg";
import friends5 from "/friends/friend-5.jpg";

const Feed = () => {
  return (
    <div className="flex flex-[2] flex-col items-center justify-center gap-3 px-3">
      <SharePost />
      <Posts image={image1} friend={friends1} name={"ali"} />
      <Posts image={image2} friend={friends2} name={"maryam"} />
      <Posts image={image3} friend={friends3} name={"sasan"} />
      <Posts image={image4} friend={friends4} name={"sara"} />
      <Posts image={image5} friend={friends5} name={"mina"} />
      <Posts image={image6} friend={friends1} name={"ali"} 
      />
      <Posts image={image7} friend={friends2} name={"maryam"} />
      <Posts image={image8} friend={friends3} name={"sasan"} />
    </div>
  );
};

export default Feed;
