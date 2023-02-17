import {unsafeCSS} from "lit";
import style from "./tailwind.global.css?inline";

export function getTailwindProcessor() { return unsafeCSS(style); }