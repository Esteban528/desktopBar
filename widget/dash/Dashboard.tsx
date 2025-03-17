import { App, Astal, Gtk, Gdk } from "astal/gtk3"
import MprisPlayers from "./MediaPlayers"
import Profile from "./Profile"
import PowerButtons from "./PowerButtons"

export default function Dashboard(gdkmonitor: Gdk.Monitor) {
  const { TOP, LEFT } = Astal.WindowAnchor

  return <window
    className="dashBoard"
    gdkmonitor={gdkmonitor}
    exclusivity={Astal.Exclusivity.EXCLUSIVE}
    anchor={TOP | LEFT}
    application={App}
    name="Dashboard"

    //widthRequest={400}
    //heightRequest={500}
  >

    <centerbox
      className="dashboard">
      <box
        vertical
        heightRequest={10}
      >
        <Profile />
        <PowerButtons/>
      </box>
    </centerbox>
  </window>
}
