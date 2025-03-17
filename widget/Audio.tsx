import { Gtk } from "astal/gtk3"
import { Variable, GLib, bind } from "astal"
import Wp from "gi://AstalWp"

export default function Audio() {

  const speaker = Wp.get_default()?.audio.defaultSpeaker!

  return <box className="audio" spacing={2}>
    <icon icon={bind(speaker, "volumeIcon")} />
    <label label={bind(speaker, "volume").as(ag => ((Math.floor(ag*100)).toString()))}></label>
  </box>
}
