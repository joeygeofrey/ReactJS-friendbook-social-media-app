import { useContext } from "react";
import "./stories.scss"
import { AuthContext } from "../../context/authContext"

const Stories = () => {

  const stories = [
    {
      id: 1,
      name: "Joey Geofrey",
      img: "https://www.whitescreen.online/image/black-background.png",
      button: "+"
    },
    {
      id: 2,
      name: "Maria Torres",
      img: "https://images.pexels.com/photos/1839238/pexels-photo-1839238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      name: "Blake Hopkins",
      img: "https://images.pexels.com/photos/8448073/pexels-photo-8448073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      name: "Carlos Rodriguez",
      img: "https://images.pexels.com/photos/3879058/pexels-photo-3879058.jpeg",
    },
    {
      id: 5,
      name: "Aisha Rahman",
      img: "https://images.pexels.com/photos/2884866/pexels-photo-2884866.jpeg",
    },
    {
      id: 6,
      name: "Jamal Ahmed",
      img: "https://images.pexels.com/photos/3884710/pexels-photo-3884710.jpeg",
    },
  ];

  return (
    <div className="stories">
      {stories.map(story => (
        <div className="story">
          <img src={story.img} alt="" />
          <span>{story.name}</span>
          <button>{story.button}</button>
        </div>
      ))}
    </div>
  )
}

export default Stories