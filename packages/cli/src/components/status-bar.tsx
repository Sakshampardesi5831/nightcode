import { TextAttributes } from "@opentui/core";

export function StatusBar(){
    return (
       <box
         flexDirection="row"
         gap={1}
       >
        <text
         fg={"cyan"}
        >
            Build
        </text>
        <text
          attributes={TextAttributes.DIM}
          fg={"gray"}
        >
           &rsaquo;
        </text>
         <text>Opus 4_6</text>
       </box>
    )
}