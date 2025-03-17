import { App, Astal, Gtk, Gdk } from "astal/gtk3"
import MprisPlayers from "./MediaPlayers"

export default function MusicPlayer(gdkmonitor: Gdk.Monitor) {
  const { TOP } = Astal.WindowAnchor

  return <window
    className="MusicPlayerWindow"
    gdkmonitor={gdkmonitor}
    exclusivity={Astal.Exclusivity.NORMAL}
    anchor={TOP}
    windowPosition={Gtk.WindowPosition.CENTER}
    application={App}
    name="MusicPlayer"
  >

    <centerbox
      className="musicPlayer">
      <box
        vertical
      >
        <MprisPlayers />
      </box>
    </centerbox>
  </window>
}
