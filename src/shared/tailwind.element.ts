import {unsafeCSS} from "lit";
import style from "./tailwind.global.css";

export function getTailwindProcessor() { return unsafeCSS(style); }