export interface userProps {
    id: number;
    name: string;
    mostListenedSongs: musics[];
    password:string;
    email:string;
    birth:string;
  }

  export interface musics {
    id: number,
    cantor:string,
    titulo:string,
    ano:number,
    estiloMusical:string
    aderencia:number;
  }