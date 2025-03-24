import { exec } from "astal"

export default function PowerButtons() {
  return <box spacing={10} className={"Profile"}>

    <button
      onClicked={() => exec("systemctl suspend")}
    >
      <box>
        <icon icon="media-playback-pause" tooltipText={"Suspend"} />
      </box>
    </button>

    <button
      onClicked={() => exec("reboot")}
    >
      <icon icon="system-reboot-symbolic" tooltipText={"Reboot"} />
    </button>

    <button
      onClicked={() => {
        exec("poweroff")
      }}
    >
      <icon icon="system-shutdown-symbolic" tooltipText={"Poweroff"} />
    </button>
  </box>
}
