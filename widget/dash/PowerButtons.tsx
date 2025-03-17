import { Astal, Gtk } from "astal/gtk3"
import { bind, exec, GLib } from "astal"

const userName = "Esteban528";

export default function PowerButtons() {
  return <box spacing={10} className={"Profile"} >
    <button
      onClicked={() => {
        exec("poweroff")
      }}
    >
      <label>Power off</label>
    </button>

    <button
      onClicked={() => exec("systemctl suspend")}
    >
      <label>Sleep</label>
    </button>
  </box>

}
