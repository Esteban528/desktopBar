import { Variable, GLib, bind, exec } from "astal"

const clientNames = {
  'chromium-browser': 'chromium'
}

export default function ActiveClient() {
  const activeClient = Variable<WindowInfo>("activeClient").poll(450, () =>
    getActiveWindow());

  return (
    <box spacing={10}>
      {bind(activeClient, "app_id").get() !== "" ? (
        <icon
          icon={bind(activeClient).as(client =>
            clientNames[client?.app_id ?? ""] ?? client?.app_id ?? ""
          )}
        />
      ) : null}
      <label
        maxWidthChars={15}
        label={bind(activeClient).as(client => {
          if (!client) return "";
          const title = client.title ?? "";
          return title.length > 20
            ? `${title.substring(0, 20)}... - ${client.app_id}`
            : title;
        })}
      />
    </box>
  );
}

function getActiveWindow() {
  const out = exec("niri msg --json windows");
  const windows: Array<WindowInfo> = JSON.parse(out);
  return windows.find(client => client.is_focused);
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
