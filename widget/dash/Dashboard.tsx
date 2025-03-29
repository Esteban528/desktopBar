import { App, Astal, Gtk, Gdk } from "astal/gtk3"
import Profile from "./Profile"
import PowerButtons from "./PowerButtons"
import Controls from "./Controls"
import NotificationContainer from "./NotificationContainer"

export default function Dashboard(gdkmonitor: Gdk.Monitor) {
  const { TOP, RIGHT } = Astal.WindowAnchor

  return <window
    className="dashBoard"
    gdkmonitor={gdkmonitor}
    exclusivity={Astal.Exclusivity.EXCLUSIVE}
    anchor={TOP | RIGHT}
    application={App}
    name="Dashboard"

  //widthRequest={400}
  //heightRequest={500}
  >

    <centerbox
      className="dashboard"
    >
      <box
        vertical
        heightRequest={10}
        spacing={10}

        valign={Gtk.Align.CENTER}
        halign={Gtk.Align.CENTER}
      >
        <Profile />
        <box
          valign={Gtk.Align.CENTER}
          halign={Gtk.Align.START}
        >
          <Controls />
        </box>
        <PowerButtons />
      </box>
    </centerbox>
  </window >
}
