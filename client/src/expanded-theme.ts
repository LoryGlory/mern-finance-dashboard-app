// expand theme-settings for typescript support
// eslint-disable-next-line
import {Palette, PaletteColor} from "@mui/material/styles/createPalette";

// add paletteColor of tertiary to palette
declare module "@mui/material/styles/createPalette" {
    interface PaletteColor {
        [key: number]: string
    }

    interface Palette {
        tertiary: PaletteColor
    }
}
