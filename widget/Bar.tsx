import { App, Astal, Gtk, Gdk } from "astal/gtk3"
import Clock from "./Clock"
import Systray from "./Tray"
import Music from "./Music"
import ActiveClient from "./ActiveClient"
import DashboardButton from "./DashboardButton"

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
        <ActiveClient />
        <Music />
      </box>
      <box
        hexpand
        halign={Gtk.Align.CENTER}
      >
        <Clock />
      </box>

      <box
        halign={Gtk.Align.END}
        valign={Gtk.Align.CENTER}
        hexpand
        spacing={6}
      >
        <Systray />
        <DashboardButton />
      </box>
    </centerbox>
  </window>
}
