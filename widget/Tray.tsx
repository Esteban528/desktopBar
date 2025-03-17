import Tray from "gi://AstalTray"
import { Variable, GLib, bind } from "astal"
import { Gtk } from "astal/gtk3"

export default function Systray() {
  const tray = Tray.get_default()

  return <box
    className="systray"
    spacing={3}
  >
    {bind(tray, "items").as(items => items.map(item => (
      <menubutton
        tooltipMarkup={bind(item, "tooltipMarkup")}
        usePopover={false}
        actionGroup={bind(item, "actionGroup").as(ag => ["dbusmenu", ag])}
        menuModel={bind(item, "menuModel")}>
        <icon gicon={bind(item, "gicon")}/>
      </menubutton>
    )))}
  </box>

}
