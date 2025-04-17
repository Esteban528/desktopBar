import { App, Gtk } from "astal/gtk3"
import { Variable, GLib, bind } from "astal"
import Mpris from "gi://AstalMpris"

export default function Music() {
  return Media()
}

function Media() {
  const mpris = Mpris.get_default()

  return (
    <box className="Media">
      {bind(mpris, "players").as(ps =>
        ps[0] ? (
          <box>
            <icon icon="emblem-music-symbolic" />
            <box
              className="Cover"
              valign={Gtk.Align.CENTER}
              css={bind(ps[0], "coverArt").as(cover =>
                `background-image: url('${cover}');`
              )}
            />
            <button
              label={bind(ps[0], "metadata").as(() => {
                const title = ps[0].title ?? ""
                const artist = ps[0].artist ?? ""
                const shortTitle = title.length > 20 ? title.substring(0, 20) + "..." : title
                const shortArtist = artist.length > 15 ? artist.substring(0, 15) + "..." : artist
                return `${shortTitle} - ${shortArtist}`
              })}
              onClicked={() => {
                App.toggle_window("MusicPlayer")
              }}
            />
          </box>
        ) : (
          <label label="" />
        )
      )}
    </box>
  )
}
