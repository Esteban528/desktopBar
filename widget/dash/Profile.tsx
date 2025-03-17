import { Astal, Gtk } from "astal/gtk3"
import Mpris from "gi://AstalMpris"
import { bind, exec, GLib } from "astal"
import { fetch, URL } from "../../libs/fetch"

const userName = "Esteban528";

export default function Profile() {
  return <box spacing={10} className={"Profile"} >
    <box heightRequest={40} widthRequest={40} className={"ProfileIcon"} />
    <box vertical valign={Gtk.Align.CENTER} halign={Gtk.Align.START} spacing={5}>
      <label label={`${GLib.getenv("USER")}@${exec("cat /etc/hostname")}`} className={"username"} />
    </box>
  </box>

}

// TO do
//<label label={` ${GLib.getenv("USER")}@${exec("cat /etc/hostname")}`} className={"username"} />
async function requestGithubStats() {
  const url = new URL(`https://api.github.com/users/${userName}/repos`)

  try {
    const res = await fetch(url)
    const json = await res.json()
    print(json)
  } catch (e) {
    printerr(e);
  }
}
//const user = "{args:0}"
//
//const getStars = async () => {
//  const result = await fetch();
//  const data = await result.json();
//  const stars = data.reduce((acc, repo) => repo.stargazers_count + acc, 0);
//  console.log(`El usuario tiene  ${stars} :star:  en repositorios públicos`);
//}
