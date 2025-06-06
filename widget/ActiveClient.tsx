import { Variable, GLib, bind, exec } from "astal"
import { getWindows, getWorkSpaces, type WindowInfo } from "../libs/windows";

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
        className="activeClient"
        label={bind(activeClient).as(client => {
          if (!client) return "";
          let title = client.title ?? "";
          title = title.replace(/[^a-zA-Z0-9| \-]/g, '')
          const add = title.length >= 30 ? "..." : "";
          return `${title.substr(0, 30)} ${add}`;
        })}
      />
    </box>
  );
}

function getActiveWindow() {
  const windows = getWindows();
  return windows.find(client => client.is_focused);
}

