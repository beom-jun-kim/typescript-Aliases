let a: number[] = [1];
let b: string[] = ["1"];
let c: boolean[] = [false];

type Player = {
    name: string,
    age?: number
}

const PlayerMaker = (name: string): Player => ({ name })

// function PlayerMaker(name:string) : Player {
//     return {
//         name
//     }
// }

const nico = PlayerMaker("nico")
nico.age = 12

// const nico: Player = {
//     name: "nico"
// }

// const lynn: Player = {
//     name: "lynn",
//     age: 12
// } 