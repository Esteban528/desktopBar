import { App, Gtk } from "astal/gtk3"
import { Variable, GLib, bind } from "astal"
import Mpris from "gi://AstalMpris"

export default function Music() {
  return Media()
}

function Media() {
  const mpris = Mpris.get_default()

  return <box className="Media">
    {bind(mpris, "players").as(ps => ps[0] ? (
      <box>
        <box
          className="Cover"
          valign={Gtk.Align.CENTER}
          css={bind(ps[0], "coverArt").as(cover =>
            `background-image: url('${cover}');`
          )}
        />
        <button
          label={bind(ps[0], "metadata").as(() =>
            `${ps[0].title} - ${ps[0].artist}`
          )}
          onClicked={()=> {

            App.toggle_window("MusicPlayer")
          }}
        />
      </box>
    ) : (
      <label label="Nothing Playing" />
    ))}
  </box>
}
