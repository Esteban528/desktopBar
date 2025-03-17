import { Gtk } from "astal/gtk3"
import { Variable, GLib, bind } from "astal"
import Network from "gi://AstalNetwork"

export default function Networking() {
  const network = Network.get_default()
  const connection: string = network.primary.ASTAL_NETWORK_PRIMARY_WIFI ? "wifi" : "wired";
  const wifi = bind(network, "wifi")
  const wired = bind(network, "wired")

  return connection === "wifi" ? wifiStatus(wifi) : wiredStatus(wired);
}

function wifiStatus(wifi) {
  return <box visible={wifi.as(Boolean)}>
    {wifi.as(wifi => wifi && (
      <icon
        tooltipText={bind(wifi, "ssid").as(String)}
        className="Wifi"
        icon={bind(wifi, "iconName")}
      />
    ))}
  </box>
}

function wiredStatus(wired) {
  return <box visible={wired.as(Boolean)}>
    {wired.as(wired => wired && (
      <icon
        name="wired"
        tooltipText={bind(wired, "device").as(String)}
        className="wired"
        icon={bind(wired, "iconName")}
      />
    ))}
  </box>
}
