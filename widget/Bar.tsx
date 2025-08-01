import { App, Astal, Gtk, Gdk } from "astal/gtk3"
import Clock from "./Clock"
import Systray from "./Tray"
import Music from "./Music"
import ActiveClient from "./ActiveClient"
import DashboardButton from "./DashboardButton"
import WorkspaceDash from "./Workspaces"
import Audio from "./Audio"
import Networking from "./Networking"

export default function Bar(gdkmonitor: Gdk.Monitor) {
  const { TOP, LEFT, RIGHT } = Astal.WindowAnchor

  return <window
    className="bar"
    gdkmonitor={gdkmonitor}
    exclusivity={Astal.Exclusivity.EXCLUSIVE}
    anchor={TOP | LEFT | RIGHT}
    application={App}>

    <centerbox
      className="bar_container">

      <box hexpand
        spacing={17}
        halign={Gtk.Align.START}
      >
        <WorkspaceDash />
        <ActiveClient />
      </box>
      <box
        hexpand
        halign={Gtk.Align.CENTER}
      >

        <Music/>
      </box>

      <box
        halign={Gtk.Align.END}
        valign={Gtk.Align.CENTER}
        hexpand
        spacing={6}
      >
        <Systray />
        <Networking />
        <Audio />
        <Clock />
        <DashboardButton />
      </box>
    </centerbox>
  </window>
}
