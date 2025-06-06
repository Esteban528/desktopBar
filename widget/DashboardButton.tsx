import { Variable, GLib, bind, exec, timeout } from "astal"
import { Gtk, App } from "astal/gtk3";

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
    <box spacing={3}>
      <icon icon={GLib.get_os_info("LOGO") || "missing-symbolic"} />
      <revealer
        revealChild={bind(show)}
        transitionType={Gtk.RevealerTransitionType.SLIDE_RIGHT}>
        <label label="Dashboard" />
      </revealer>
    </box>
  </eventbox>

}
