export function MoodBoardItem({ color, image, description }) {
  return (
    <div className="mood-board-item" style={{backgroundColor: color
      }}>
      <img className="mood-board-image" src={image} />
      <h3 className="mood-board-text">{description}</h3>
    </div>
  );
}

export function MoodBoard() {
  const moods = [
    {
      item: 1,
      color: "#f89808",
      image: "https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg",
      description: "kayak"
    },
    {
      item: 2,
      color: "green",
      image: "https://cdn.freecodecamp.org/curriculum/labs/shore.jpg",
      description: "sample text"
    },
    {
      item: 3,
      color: "blue",
      image: "https://cdn.freecodecamp.org/curriculum/labs/grass.jpg",
      description: "grass"
    }
  ];
  
  return (
    <div>
      <h1 className="mood-board-heading">Destination Mood Board</h1>
      <div className="mood-board">
      {moods.map((mood) => (
        <MoodBoardItem
          key = {mood.item}
          color = {mood.color}
          image = {mood.image}
          description = {mood.description}
          />
      ))}
      </div>
    </div>
  );
}
