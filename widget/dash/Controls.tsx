import { bind, exec, Variable } from "astal"
import { App, Astal, Gtk, Gdk } from "astal/gtk3"
import Wp from "gi://AstalWp"

const get = (args: string) => Number(exec(`brightnessctl ${args}`))

export default function Controls() {
  return <box>
    <AudioSlider />
    {get("get") > 0 && <BrigthnessSlider />}
  </box>
}


function AudioSlider() {
  const speaker = Wp.get_default()?.audio.defaultSpeaker!

  return <box className="AudioSlider" css="min-width: 140px; padding: 20px">
    <icon icon={bind(speaker, "volumeIcon")} />
    <slider
      hexpand
      onDragged={({ value }) => speaker.volume = value}
      value={bind(speaker, "volume")}
    />
    <label label={bind(speaker, "volume").as(ag => ((Math.floor(ag*100)).toString()))}></label>
  </box>
}

function BrigthnessSlider() {
  const screenMax = get("max")
  const percent = Variable<Number>(get("get"));

  return <box className="AudioSlider" css="min-width: 140px">
    <icon icon="display-brightness-symbolic" />
    <slider
      hexpand
      onDragged={({ value }) => percent.set(value)}
      value={bind(percent).as(Number)}
      max={screenMax}
    />
  </box>
}
