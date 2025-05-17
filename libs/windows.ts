import { exec } from "astal";

export function getWindows() : Array<WindowInfo>{
  const out = exec("niri msg --json windows");
  const windows: Array<WindowInfo> = JSON.parse(out);
  return windows;
}

export function getWorkSpaces(): Array<WorkspaceInfo> {
  const out = exec("niri msg --json workspaces");
  const ws: Array<WorkspaceInfo> = JSON.parse(out);
  ws.sort((a,b) => a.id - b.id);
  return ws.filter(a => a.active_window_id != null);
}

export function niriAction(cmd:string) {
  console.log(getWorkSpaces())
  return exec(`niri msg action ${cmd}`);
}

export interface WindowInfo {
  id: number;
  title: string;
  app_id: string;
  pid: number;
  workspace_id: number;
  is_focused: boolean;
  is_floating: boolean;
}

export interface WorkspaceInfo {
  id: number;
  idx: number;
  name: string | null;
  output: string;
  is_active: boolean;
  is_focused: boolean;
  active_window_id: number | null;
}
