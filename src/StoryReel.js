import React from "react";
import "./StoryReel.css";
import Story from "./Story";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story 
        image="https://mobirise.com/bootstrap-carousel/assets2/images/thomas-smith-399133-1707x2560.jpg" 
        profileSrc="https://media.gq.com/photos/56a15e4ed312acff191b8bf2/16:9/w_2560%2Cc_limit/chris-evans-captain-america.jpg" 
        title="Steve Rogers" 
      />
      <Story 
        image="https://images.pexels.com/photos/433989/pexels-photo-433989.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
        profileSrc="https://www.geo.tv/assets/uploads/updates/2021-03-31/342447_7477185_updates.jpg" 
        title="Natasha Romanoff" 
      />
      <Story 
        image="https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmVydGljYWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" 
        profileSrc="https://img.cinemablend.com/filter:scale/quill/d/9/5/a/c/9/d95ac9d6f0acd56e12b9452301c763cd1aeffe51.jpg?mw=600" 
        title="Tony Stark" 
      />
      <Story 
        image="https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
        profileSrc="https://cdn.images.express.co.uk/img/dynamic/36/590x/SCARLETT-WITCH-826346.jpg" 
        title="Wanda Maximoff" 
      />
      <Story 
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwf57j24DTLSJ4x7nKtyGMEygTOW3EkgBwsQ&usqp=CAU" 
        profileSrc="https://www.gannett-cdn.com/presto/2019/04/25/USAT/9778482f-f809-4a08-82a7-67ddfa3e2f98-XXX_AVENGERS_AGE_ULTRON_MOV_jy_5965_.JPG?auto=webp&crop=1068,600,x1088,y30&format=pjpg&width=1200"
        title="Thor Odinson" 
      />
    </div>
  );
}

export default StoryReel;
