import { App, Widget } from "astal/gtk3"
import style from "./style/style.scss"
import Bar from "./widget/Bar"
import Dashboard from "./widget/dash/Dashboard"
import MusicPlayer from "./widget/dash/MusicPlayer"

App.start({
  css: style,
  icons: `./assets`,
  main() {
    App.get_monitors().map(Bar)

    App.get_monitors().map(Dashboard)
    App.toggle_window("Dashboard")

    App.get_monitors().map(MusicPlayer)
    App.toggle_window("MusicPlayer")
  },
})
