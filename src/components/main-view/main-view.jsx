import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      Title: "Avatar",
      Description:
        "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      Genre: {
        Name: "Action",
        Description:
          "Action film is a film genre in which the protagonist is thrust into a series of events that typically involve violence and physical feats."
      },
      Director: {
        Name: "James Cameron",
        Bio:
          "James Francis Cameron is a Canadian filmmaker and a major figure in the post-New Hollywood era.",
        Birth: "1954"
      },
      ImagePath:
        "https://dt-media.dhakatribune.com/?width=256&height=256&cropratio=4:5&quality=80&image=en/uploads/2022/12/19/image003-2.jpeg&anchor=top",
      Actors: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"],
      Featured: true
    },
    {
      id: 2,
      Title: "I Am Legend",
      Description:
        "Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure.",
      Genre: {
        Name: "Thriller",
        Description:
          "Thriller film, also known as suspense film or suspense thriller, is a broad film genre that involves excitement and suspense in the audience."
      },
      Director: {
        Name: "Francis Lawrence",
        Bio:
          "Francis Lawrence is an Austrian-born American filmmaker and producer.",
        Birth: "1971"
      },
      ImagePath:
        "https://m1.secondhandapp.at/2.0/62fb19a0672816377452bcb6?height=256&width=256",
      Actors: ["Will Smith", "Alice Braga"],
      Featured: true
    },
    {
      id: 3,
      Title: "300",
      Description:
        "King Leonidas of Sparta and a force of 300 men fight the Persians at Thermopylae in 480 B.C.",
      Genre: {
        Name: "Action",
        Description:
          "Action film is a film genre in which the protagonist is thrust into a series of events that typically involve violence and physical feats."
      },
      Director: {
        Name: "Zack Snyder",
        Bio:
          "Zachary Edward Snyder is an American film director, producer, screenwriter, and cinematographer.",
        Birth: "1966"
      },
      ImagePath:
        "https://resizing.flixster.com/WPGXy6U0bxJt7RhgJUbOSAZxAoU=/206x305/v2/https://flxt.tmsimg.com/assets/p163191_p_v8_al.jpg",
      Actors: ["Gerard Butler"],
      Featured: true
    },
    {
      id: 4,
      Title: "The Avengers",
      Description:
        "Earth''s mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.",
      Genre: {
        Name: "Action",
        Description:
          "Action film is a film genre in which the protagonist is thrust into a series of events that typically involve violence and physical feats."
      },
      Director: {
        Name: "Joss Whedon",
        Bio:
          "Joseph Hill Whedon is an American filmmaker, composer, and comic book writer.",
        Birth: "1964"
      },
      ImagePath:
        "https://c-cl.cdn.smule.com/rs-s79/arr/c8/9d/61f7825b-1066-418c-9200-76e28e5ae497.jpg",
      Actors: ["Robert Downey Jr.", "Chris Evans", "Chris Hemsworth"],
      Featured: true
    },
    {
      id: 5,
      Title: "Interstellar",
      Description:
        "A team of explorers travel through a wormhole in space in an attempt to ensure humanity''s survival.",
      Genre: {
        Name: "Sci-Fi",
        Description:
          "Science fiction (sometimes shortened to sf or sci-fi) is a genre of speculative fiction, which typically deals with imaginative and futuristic concepts such as advanced science and technology, space exploration, time travel, parallel universes, and extraterrestrial life."
      },
      Director: {
        Name: "Christopher Nolan",
        Bio:
          "British film director and writer acclaimed for his noirish visual aesthetic and unconventional, often highly conceptual narratives.",
        Birth: "1970"
      },
      ImagePath:
        "https://merchbar.imgix.net/product/4/1616/40984858/JL94qAEh3867195-2632021.jpg?quality=60&auto=compress,format&w=256",
      Actors: ["Matthew McConaughey", "Anne Hathaway"],
      Featured: true
    }
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return (
      <MovieView
        movie={selectedMovie}
        onBackClick={() => setSelectedMovie(null)}
      />
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
    </div>
  );
};
