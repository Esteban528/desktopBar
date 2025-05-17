
import { Variable, GLib, bind, exec } from "astal"
import { getWindows, getWorkSpaces, niriAction, type WindowInfo } from "../libs/windows";
import { Icon, Label } from "astal/gtk3/widget";


export default function WorkspaceDash() {
  const ws = Variable<WindowInfo>(getWs()).poll(50, () =>
    getWs());

  return (
    <box spacing={1}>
      {ws(w => w.map(i => (
        <button className={"ws" + (i.is_focused ? " active" : "")} onClick={()=> niriAction(`focus-workspace ${i.idx}`)}>
          <Icon icon={i.is_focused ? "media-playback-stop" : "media-record-symbolic"}/> 
        </button>
      )))}
    </box>
  );
}

function getWs() {
  return getWorkSpaces();
}

