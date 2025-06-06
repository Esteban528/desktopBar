import { Gtk } from "astal/gtk3"
import { Variable, GLib } from "astal"


export default function Clock() {
  const formatHour = "%H:%M";
  const formatDate = "%e %B";

  const time = Variable<string>("").poll(1000, () =>
    GLib.DateTime.new_now_local().format(formatHour)!)

  const date = Variable<string>("").poll(1000, () =>
    GLib.DateTime.new_now_local().format(formatDate)!)

  return <box
    className="clock"
    hexpand
  >
    <label
      className="date"
      label={date()}
    ></label>
    <button
      className="time"
      onDestroy={() => { time.drop(); date.drop() }}
      label={time()}
      onClicked={"notify-send open calendar"}
    />

  </box>
}
