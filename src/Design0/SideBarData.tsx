export type SideBarDataType = {
    text: string,
    path: string,
    subdata?: SideBarDataType[],
  };
  
  export const sideBarData: SideBarDataType[] = [
    {
      text: "Home",
      path: "/",
    },
    {
      text: "Projects",
      path: "/projects",
      subdata: [
        {
          text: "Games",
          path: "/projects/games",
          subdata: [
            {
              text: "Sudoku",
              path: "/projects/games/sudoku",
            },
            {
              text: "Tetris",
              path: "/projects/games/tetris",
            },
            {
              text: "TicTacToe",
              path: "/projects/games/tictactoe",
            },
            {
              text: "Board Games",
              path: "/projects/games/board-games",
            },
          ],
        },
        {
          text: "Linguistics",
          path: "/projects/linguistics",
          subdata: [
            {
              text: "Sound Change Applier",
              path: "/projects/linguistics/sound-change-applier",
            }
          ],
        },
        {
          text: "Visualizers",
          path: "/projects/visualizers",
          subdata: [
            {
              text: "Path Finders",
              path: "/projects/visualizers/path-finders"
            },
            {
              text: "Sorting",
              path: "/projects/visualizers/path-finders"
            },
            {
              text: "CPU Simulation",
              path: "/projects/visualizers/path-finders"
            },
          ]
        },
      ],
    },
    {
      text: "Work",
      path: "/work",
    },
    {
      text: "Blog",
      path: "/blog",
    },
    {
      text: "Contact",
      path: "/contact",
    },
    {
      text: "About",
      path: "/about",
    },
  ];