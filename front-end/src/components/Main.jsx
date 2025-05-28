import React from "react";

import ItemList from "./ItemList";
import { artistArray } from '../assets/database/artists';
import { songsArray } from '../assets/database/songs';
const Main = ({type = undefined}) => {
  return (
    <div className="main">
      {/* Item List de Artistas */}
      {type === "artists" || type === undefined ? (
        <ItemList title="Artistas" items={5} itemsArray={artistArray} path="/artists" idPath="/artist"/>
      ): (<></>) }
      
      {/* Item List de Musicas */}
      {type === "songs" || type === undefined ? (
        <ItemList title="Músicas" items={10} itemsArray={songsArray} path="/songs" idPath="/song"/>
      ): (<></>) }
    </div>
  );
};

export default Main;
