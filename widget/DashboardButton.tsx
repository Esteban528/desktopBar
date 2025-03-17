import { Variable, GLib, bind, exec, timeout } from "astal"
import { Gtk, App } from "astal/gtk3";
import Dashboard from "./dash/Dashboard";

export default function DashboardButton() {
  const show = Variable<boolean>(false);

  return <eventbox
    className="dashboardButton"
    onHover={() => {
      show.set(true);
    }}

    onHoverLost={() => {
      show.set(false);
    }}

    onClick={() => {
      App.toggle_window("Dashboard")
    }}
  >
    <box >
      <icon icon={GLib.get_os_info("LOGO") || "missing-symbolic"} />
      <revealer
        revealChild={bind(show)}
        transitionType={Gtk.RevealerTransitionType.SLIDE_RIGHT}>
        <label label="Menu" />
      </revealer>
    </box>
  </eventbox>

}
