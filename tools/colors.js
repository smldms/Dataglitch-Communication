//////////////PALETTE
let palette = {
    n: fxrand(),
    clr: [],
    bgClr: [],
    extraClr: "",
    name: ""
}

if (palette.n < 0.5) {
    palette.bgClr = ["#0D0D0D", "#0D0D0D"]
    palette.clr = ["#FFFFFF", "#F2F1F0"]
    palette.name = "🎨 BLACK"
} else {
    palette.bgClr = ["#FFFFFF", "#F2F1F0"]
    palette.clr = ["#0D0D0D", "#0D0D0D"]
    palette.name = "🎨 WHITE"
}