import { Variable, GLib, bind, exec } from "astal"

export default function ActiveClient() {
  const activeClient = Variable<WindowInfo>("activeClient").poll(450, () =>
    getActiveWindow())

  return <box>
    <label maxWidthChars={15} label={bind(activeClient).as(client => {
      if (!client || client == null)
        return "";
      const title = client.title ?? "";
      const result = title.length > 20 ? `${title.substring(0, 20)}... - ${client.app_id}` : title;
      return result;
    })} />
  </box>
}

function getActiveWindow() {
  const out = exec("niri msg --json windows");
  const windows: Array<WindowInfo> = JSON.parse(out);
  return windows.find(client => client.is_focused)
}

interface WindowInfo {
  id: number;
  title: string;
  app_id: string;
  pid: number;
  workspace_id: number;
  is_focused: boolean;
  is_floating: boolean;
}
